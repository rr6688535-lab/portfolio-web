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
    let body = req.body || {};
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body || '{}');
      } catch (_err) {
        body = {};
      }
    }

    if (!body || Object.keys(body).length === 0) {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(Buffer.from(chunk));
      }
      const raw = Buffer.concat(chunks).toString('utf8');
      if (raw) {
        try {
          body = JSON.parse(raw);
        } catch (_err) {
          body = {};
        }
      }
    }

    const {
      contactIntent = '',
      name = '',
      contact = '',
      service = '',
      contactPreference = '',
      email = '',
      message = ''
    } = body;

    const missing = [];
    if (!name) missing.push('name');
    if (contactIntent === 'request-call') {
      if (!contact) missing.push('contact');
      if (!service) missing.push('service');
    } else {
      if (!email) missing.push('email');
      if (!message) missing.push('message');
    }
    if (missing.length) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.', missing });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || '';
    const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || '';

    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_RECEIVER_EMAIL) {
      return res.status(500).json({ ok: false, error: 'Resend transport is not configured.' });
    }

    const subject = `New Portfolio Lead: ${service || 'General Inquiry'}`;
    const text = [
      `Intent: ${contactIntent || 'N/A'}`,
      `Name: ${name}`,
      `Contact: ${contact || 'N/A'}`,
      `Email: ${email || 'N/A'}`,
      `Service: ${service || 'N/A'}`,
      `Contact Preference: ${contactPreference || 'N/A'}`,
      '',
      'Message:',
      message || 'No detailed message provided. User requested direct call/text follow-up.'
    ].join('\n');

    const html = `
      <h2>New Portfolio Lead</h2>
      <p><strong>Intent:</strong> ${contactIntent || 'N/A'}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Contact:</strong> ${contact || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Service:</strong> ${service || 'N/A'}</p>
      <p><strong>Contact Preference:</strong> ${contactPreference || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || 'No detailed message provided. User requested direct call/text follow-up.').replace(/\n/g, '<br/>')}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_RECEIVER_EMAIL],
        subject,
        text,
        html,
        reply_to: email || undefined
      })
    });

    const resendData = await resendResponse.json().catch(() => ({}));
    if (!resendResponse.ok) {
      const msg = resendData?.message || 'Resend API rejected the request.';
      return res.status(500).json({ ok: false, error: 'Email delivery failed.', detail: msg });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Email delivery failed.',
      detail: error && error.message ? error.message : 'Unknown transport error.'
    });
  }
};
