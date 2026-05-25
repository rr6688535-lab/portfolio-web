-- Run this in Supabase SQL Editor
create table if not exists public.rating_votes (
  id bigint generated always as identity primary key,
  email text,
  value smallint not null check (value between 1 and 5),
  device_id text,
  created_at timestamptz not null default now()
);

-- Backward-compatible schema updates for existing tables
alter table public.rating_votes add column if not exists email text;
alter table public.rating_votes add column if not exists device_id text;
alter table public.rating_votes alter column device_id drop not null;
alter table public.rating_votes alter column email set not null;

-- Remove old one-device unique lock if present
drop index if exists rating_votes_device_id_key;
alter table public.rating_votes drop constraint if exists rating_votes_device_id_key;

-- One rating per email (case-insensitive)
create unique index if not exists rating_votes_email_unique on public.rating_votes (lower(email));

alter table public.rating_votes enable row level security;

-- Recreate policies in a compatible way
drop policy if exists public_read_ratings on public.rating_votes;
create policy public_read_ratings
on public.rating_votes
for select
using (true);

drop policy if exists public_insert_rating on public.rating_votes;
create policy public_insert_rating
on public.rating_votes
for insert
with check (true);
