-- Run this in your Supabase SQL editor
-- Dashboard → SQL Editor → New Query → paste this → Run

create table if not exists leagues (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz default now()
);

-- Allow public read and write (the app handles its own auth via commissioner password)
alter table leagues enable row level security;

create policy "Public read" on leagues
  for select using (true);

create policy "Public write" on leagues
  for all using (true);
