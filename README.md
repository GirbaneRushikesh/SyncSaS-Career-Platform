# SyncSaS — Internship Platform (Frontend demo)

## Overview
- React + Vite frontend demo for a freelance/internship platform.
- Local persistence via localStorage (gigs, bookmarks, reviews, profile).

## How to run (one-time)
1. Open terminal (Windows CMD or PowerShell)
2. cd "C:\Users\RG\SyncSaS-Career-Platform\web-app"
3. npm install
4. npm run dev
5. Open http://127.0.0.1:5173/

## Quick presentation checklist ( do these before demo )
- Start dev server (see above).
- Profile: open Profile page → set your Name → upload avatar → Save → refresh to confirm persistence.
- Client: open Client dashboard → click "Post new gig" → create gig → confirm it appears under Client and Explore.
- Gig detail: open a gig → Click "Message/Contact" (or Messages) to show messaging stub.
- Bookmarks: Save a gig → open Bookmarks → click Export → confirm JSON downloads.
- Dark mode: toggle top-right theme and show both modes.
- Confirm no console errors in browser devtools.

## Files (high level)
- web-app/src/... (contexts, pages, components) — core frontend code using localStorage and mock data.

## Notes
- This is a frontend demo (no backend). For production, replace contexts with API services and add auth.

## Key features
- Explore gigs, view gig details, post/preview gigs (local), bookmarks export, profile with avatar upload, company page.

## Developer notes
- Primary contexts: GigContext, BookmarkContext, ReviewContext.
- Recommended next steps: rename modules/gigs, centralize services, add unit tests, add role-based routing.

## Modules
- Internship (STIP)
- Job Portal
- Freelancing

## Tech Stack
- React
- Firebase
- Tailwind
- GitHub Actions

## Repo Rules
- No direct push to main
- PR required
- Module-based ownership
