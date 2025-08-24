# GSLO Legal Assist — Mini Legal Portal (Frontend Only)

A responsive mini legal portal built with React + Vite + Tailwind. It simulates authentication and stores user details and legal queries in **LocalStorage** (no backend).

> Visual style inspired by GSLO’s public site aesthetic (demo only, not affiliated).

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- React Router
- React Hook Form + Yup
- LocalStorage (demo data)

## Features
- Home page with hero, GSLO-style practice areas, and CTA
- Login/Signup with validation
- Dashboard with profile, saved queries (cards), new query form
- Demo seed data for quicker walkthrough
- Responsive navbar and layout (mobile-first)
- Protected routes (redirects unauthenticated users to /auth)

## Getting Started
```bash
npm install
npm run dev
```
Then open the local URL printed by Vite.

## Project Structure
```
/src
  /components
    Navbar.jsx
    Hero.jsx
    QueryCard.jsx
    ProtectedRoute.jsx
  /pages
    Home.jsx
    Auth.jsx
    Dashboard.jsx
  /context
    AuthContext.jsx
  /utils
    validationSchema.js
  App.jsx
  main.jsx
  index.css
```
## Screenshots (placeholders)
Add your screenshots here: Home, Auth, Dashboard.

## Notes
- All data is stored per-user using keys: `legassist_user`, `legassist_queries:<email>`.
- This is a frontend-only assignment; no backend or API calls.
