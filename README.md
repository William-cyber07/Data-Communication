# Satellite Communication Research Website

A fully interactive research paper website covering satellite data communication systems.

## Project Structure

```
satellite-site/
├── index.html      ← Main website (all pages/sections)
├── style.css       ← All styling
├── app.js          ← Navigation, interactivity, localStorage
├── vercel.json     ← Vercel deployment config
└── README.md       ← This file
```

---

## Step-by-Step Deployment Guide

### STEP 1 — Set Up Your Folder in VS Code

1. Open **VS Code**
2. Go to `File → Open Folder`
3. Select the `satellite-site` folder you downloaded
4. You should see `index.html`, `style.css`, `app.js`, and `vercel.json` in the file explorer on the left

To preview locally, right-click `index.html` → **Open with Live Server** (install the "Live Server" VS Code extension if you haven't already).

---

### STEP 2 — Push to GitHub

1. Go to [github.com](https://github.com) and log in
2. Click the **+** button (top right) → **New repository**
3. Name it: `satellite-communication-site`
4. Set it to **Public** (required for free Vercel deployment)
5. Click **Create repository**
6. GitHub will show you commands. Open the **VS Code Terminal** (`Ctrl + ~` or `View → Terminal`) and run:

```bash
git init
git add .
git commit -m "Initial commit: satellite communication website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/satellite-communication-site.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username shown on the page.

---

### STEP 3 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in **using your GitHub account**
2. Click **"Add New Project"**
3. Find and select your `satellite-communication-site` repository
4. Leave all settings as default — Vercel auto-detects it's a static site
5. Click **"Deploy"**
6. Wait about 30 seconds — Vercel will give you a live URL like:
   `https://satellite-communication-site.vercel.app`

---

### STEP 4 — Making Updates Later

Whenever you want to update the website:

1. Edit files in VS Code
2. In the terminal, run:

```bash
git add .
git commit -m "Update: describe what you changed"
git push
```

Vercel will **automatically redeploy** within seconds!

---

## Website Features

| Feature | How to Use |
|--------|-----------|
| **Navigation** | Click any section in the left sidebar |
| **Mobile menu** | Tap the ☰ hamburger button |
| **Profile photo** | Go to "About" → Click "Change Photo" → Upload any image |
| **Edit profile info** | Click on any field in the About section and type |
| **Save profile** | Click the green "Save Profile" button (persists in browser) |
| **Acknowledgements** | Edit lecturer name, department, and message directly on screen |
| **Save acknowledgements** | Click "Save Acknowledgements" button |

---

## Customising Content

All content is in `index.html`. To change text:
- Open `index.html` in VS Code
- Use `Ctrl + F` to search for the text you want to change
- Edit it directly

To change colours, open `style.css` and look for the `:root` block at the top — all main colours are defined there as CSS variables.
