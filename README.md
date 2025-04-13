# 🚀 Turborepo Starter: Next.js + Expo + Hono.js

A monorepo starter built with ⚡️ [Turborepo](https://turbo.build/repo), featuring:

- 🖥️ **Web app** — built with [Next.js](https://nextjs.org/)
- 📱 **Native app** — built with [Expo (React Native)](https://expo.dev/)
- 🌐 **Backend** — powered by [Hono.js](https://hono.dev/) (lightweight and fast)
- 🛠️ **TypeScript** — shared across all apps
- 💅 **Tailwind CSS** — for styling in web
- 🎨 **NativeWind** — for styling in mobile
- 🧩 **Tamagui** — shared UI components across web & mobile
- 💾 **Supabase** — database + auth + realtime (plug-and-play ready)
- ⚡ **pnpm** — monorepo package manager

---
## ✨ Tech Highlights

🖥️ **Web** – Next.js
Located in apps/frontend

Uses Tailwind CSS (via packages/config)

Can consume @ui Tamagui components

📱 **Native** – React Native (Expo)
Located in apps/mobile

Uses NativeWind + Tamagui

Works with Expo Go

🌐 **Backend** – Hono.js
Located in apps/backend

Lightweight, fast API with web-standard Fetch handlers

Can connect to Supabase

🔗 **Shared packages**
packages/ui — Tamagui design system

packages/config — Tailwind config, shared TypeScript configs, etc

---
## 📁 Project Structure
```
turbo-starter/ ├── apps/ │ ├── frontend/ # Next.js web app │ ├── mobile/ # Expo React Native app │ └── backend/ # Hono.js API backend ├── packages/ │ ├── ui/ # Shared Tamagui components │ └── config/ # Shared Tailwind, tsconfig, etc ├── package.json # Root package (with workspaces) ├── turbo.json # Turborepo pipeline config └── tsconfig.base.json # Shared TypeScript config
```

---

## 🧱 Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Supabase project](https://supabase.com/) (optional)

---

## 📦 Setup Instructions

1. **Install dependencies**

```bash
pnpm install
```

2. **Run all apps in dev mode**

```bash
pnpm dev
```

3. **Run individual apps**

```bash
pnpm dev -F frontend   # Start Next.js app
pnpm dev -F backend    # Start Hono backend
pnpm dev -F mobile     # Start Expo mobile app
```