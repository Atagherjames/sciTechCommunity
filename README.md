# SciTech Community

A modern, full-stack community and collaboration platform for researchers, tech enthusiasts, and builders to connect, share discoveries, exchange ideas, and innovate together.

**Author:** James Atagher ([GitHub](https://github.com/Atagherjames))

---

## Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript & Vite
- **Styling:** Tailwind CSS & Shadcn UI
- **Routing:** TanStack Router
- **Server State Management:** TanStack React Query
- **Client State:** Zustand
- **Forms & Validation:** React Hook Form & Zod

### Backend
- **Server Framework:** Express.js (TypeScript)
- **Database:** PostgreSQL (native, no Docker required)
- **ORM & Migrations:** Prisma ORM
- **Authentication:** JWT (JSON Web Tokens) with bcryptjs password hashing
- **File Uploads:** Multer with local static asset serving
- **Real-Time Messaging:** Socket.io / WebSockets

---

## Getting Started

### 1. Prerequisites
- Node.js (v18+) & npm
- PostgreSQL running locally (default port: `5432`)

### 2. Backend Setup
```bash
cd server
npm install
npx prisma generate
npx prisma db push
npm run dev
```
The Express server runs on `http://localhost:5000`.

### 3. Frontend Setup
```bash
npm install
npm run dev
```
The frontend runs on `http://localhost:5173`.

