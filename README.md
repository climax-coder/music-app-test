# 🎵 Music App Mini-Prototype

A clean, responsive mini music browsing app built with **React**, **TypeScript**, **Zustand**, and **Tailwind CSS**, showcasing real-world patterns in component design, state management, routing, and unit testing.

---

## ✨ Features

- ✅ Albums list page with artist and title
- ✅ Detail page showing songs for selected album
- ✅ Zustand for global state management
- ✅ Persistent route support (refresh-safe)
- ✅ Unit tested with Jest + React Testing Library
- ✅ Tailwind CSS v3 styling for mobile-first UI
- ✅ Written entirely in TypeScript + Vite

---

## 📦 Tech Stack

| Tech                      | Purpose                              |
| ------------------------- | ------------------------------------ |
| **React**                 | UI framework for building components |
| **TypeScript**            | Type safety and modern JS tooling    |
| **Zustand**               | Lightweight global state management  |
| **React Router**          | SPA navigation with dynamic routing  |
| **Tailwind CSS**          | Utility-first CSS framework          |
| **Jest**                  | JavaScript testing framework         |
| **React Testing Library** | Component-level unit testing         |
| **Vite**                  | Super-fast bundler & dev server      |

---

## 🛠️ Setup Instructions

### 1. Clone and install dependencies

```bash
git clone <https://github.com/climax-coder/music-app-test>
cd music-app
npm install

```

### 1. Start development server and Run Tests

```bash
npm run dev
npm run test
```

### Project Structure

```txt
src/
├── components/ # Reusable components (ArtistList, ArtistDetail)
├── pages/ # Route views (Home.tsx, Artist.tsx)
├── store/ # Zustand store config (musicStore.ts)
├── data/ # Mock album/song data (albums.ts)
├── App.tsx # Routing setup
├── main.tsx # App bootstrap
├── index.css # Tailwind CSS setup
```

### Implementation Highlights

- ✅ Uses album id in URL path (/artist/:id) to ensure unique navigation
- ✅ Album data is initialized in App.tsx for route-safe state hydration
- ✅ Tailwind classes ensure clean responsive layout with minimal CSS
- ✅ Album and song structures are strictly typed using interfaces
