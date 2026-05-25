-- Run this in Supabase SQL Editor
create table if not exists public.rating_votes (
  id bigint generated always as identity primary key,
  device_id text not null unique,
  value smallint not null check (value between 1 and 5),
  created_at timestamptz not null default now()
);

alter table public.rating_votes enable row level security;

-- Public read for rating summary
create policy if not exists "public_read_ratings"
on public.rating_votes
for select
using (true);

-- Public insert for one-time rating from browser
create policy if not exists "public_insert_rating"
on public.rating_votes
for insert
with check (true);
