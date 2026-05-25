const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const {
      contactIntent = '',
      name = '',
      contact = '',
      service = '',
      contactPreference = '',
      email = '',
      message = ''
    } = body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || SMTP_USER;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER_EMAIL) {
      return res.status(500).json({ ok: false, error: 'Mail transport is not configured.' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    const subject = `New Portfolio Lead: ${service || 'General Inquiry'}`;
    const text = [
      `Intent: ${contactIntent || 'N/A'}`,
      `Name: ${name}`,
      `Contact: ${contact || 'N/A'}`,
      `Email: ${email}`,
      `Service: ${service || 'N/A'}`,
      `Contact Preference: ${contactPreference || 'N/A'}`,
      '',
      'Message:',
      message
    ].join('\n');

    await transporter.sendMail({
      from: `Portfolio Lead <${SMTP_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject,
      text
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Email delivery failed.',
      detail: error && error.message ? error.message : 'Unknown transport error.'
    });
  }
};
