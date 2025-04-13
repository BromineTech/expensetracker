# 🚀 Turborepo Starter: Next.js + Expo + Hono.js

A monorepo starter built with ⚡️ [Turborepo](https://turbo.build/repo), featuring:

- 🖥️ **Web app** — built with [Next.js](https://nextjs.org/)
- 📱 **Native app** — built with [Expo (React Native)](https://expo.dev/)
- 🌐 **Backend** — powered by [Hono.js](https://hono.dev/) (lightweight and fast)
- 🛠️ **TypeScript** — shared across all apps
- ⚡ **pnpm** — monorepo package manager

---



---

## 🧱 Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

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
pnpm dev -F native    # Start Expo mobile app
```