# NBA Playoff Fantasy — Deploy Guide

## What you have
- `index.html` — the app UI
- `app.js` — all game logic + Supabase integration
- `supabase_setup.sql` — database schema (run once)
- This README

---

## Step 1 — Set up Supabase database (5 min)

1. Go to https://supabase.com and sign in
2. Click **New Project** → name it `nba-playoff-fantasy` → pick a region → set a database password → Create
3. Wait ~2 minutes for it to spin up
4. In the left sidebar click **SQL Editor**
5. Click **New Query**
6. Open `supabase_setup.sql` from this folder, copy the contents, paste into the editor, click **Run**
7. You should see "Success. No rows returned"

**Get your keys:**
1. In the left sidebar click **Project Settings** → **API**
2. Copy **Project URL** (looks like `https://xxxxx.supabase.co`)
3. Copy **anon public** key (long string starting with `eyJ...`)

---

## Step 2 — Add your Supabase keys to app.js (2 min)

Open `app.js` in any text editor. At the very top, find these two lines:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Replace `YOUR_SUPABASE_URL` with your Project URL.
Replace `YOUR_SUPABASE_ANON_KEY` with your anon key.

Save the file.

---

## Step 3 — Push to GitHub (3 min)

1. Go to https://github.com and sign in
2. Click **+** → **New repository**
3. Name it `nba-playoff-game` → set to **Public** → click **Create repository**
4. Follow the instructions on screen to push your files. The easiest way:
   - Download **GitHub Desktop** (desktop.github.com) if you haven't
   - Open GitHub Desktop → File → Add Local Repository → select this folder
   - Click **Publish repository**

---

## Step 4 — Deploy on Vercel (2 min)

1. Go to https://vercel.com and sign in
2. Click **Add New Project**
3. Find your `nba-playoff-game` repo and click **Import**
4. Leave all settings as default — click **Deploy**
5. Wait ~30 seconds
6. Vercel gives you a URL like `nba-playoff-game.vercel.app`

That's your live app! Share the URL with your group.

---

## Using the app

**First time (you as commissioner):**
1. Open the URL
2. Enter manager names + set your commissioner password
3. Click "Create league"

**Sharing with your group:**
- Send them the Vercel URL
- They can view standings, rosters, draft board from any device
- They'll see a "Commissioner controls are locked" notice — that's correct

**Commissioner controls:**
- Open the URL on your device
- You'll see a password field — enter your commissioner password to unlock
- Now you can: eliminate teams, mark injuries, update rounds survived, draft players

**After each playoff round ends:**
- Log in as commissioner
- Go to Rosters
- Tap eliminated teams to mark them out
- Set "Rounds Survived" for teams still in it
- Standings update instantly for everyone

---

## If anything goes wrong

- **"Supabase not configured"** → you haven't updated the keys in app.js yet
- **Draft picks not saving** → check your Supabase keys are correct
- **Can't see other people's updates** → the app polls every 30 seconds — just wait or refresh
