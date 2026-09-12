# ?? SciTech Community — Modern Collaboration Platform

[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)](https://cloudinary.com/)

**SciTech Community** is a modern, full-stack community platform designed for scientists, engineers, researchers, and technology enthusiasts to connect, exchange research, showcase projects, and collaborate in real-time. 

Inspired by platforms like Skool and GitHub Discussions, SciTech Community brings together community discovery, rich media feeds, real-time messaging, and member management in a fast, responsive interface.

**Lead Developer & Author:** [James Atagher](https://github.com/Atagherjames) | [Email](mailto:jamesatagher@gmail.com)

---

## ? Key Features

- **?? Community Discovery & Filter Engine**: Browse active communities across Science, Artificial Intelligence, Robotics, Biotech, and Computing. Filter by category, type (public/private), and pricing (free/paid).
- **?? Rich Post Feed & Media Showcases**: Publish threaded community discussions with formatted text, images, and attachments backed by global Cloudinary CDN delivery.
- **?? Real-Time Messaging & Chat**: 1-on-1 private messaging and community discussions powered by WebSockets and Server-Sent Events (SSE).
- **?? Member Profiles & Directories**: View member lists, contributor bios, geographical locations, and verified badges.
- **?? Modern Design System**: Responsive UI built with Tailwind CSS, Lucide icons, dynamic avatars, and theme support.
- **? Optimistic UI Updates**: Instant interactions with TanStack Query caching, auto-refetching, and background synchronization.

---

## ??? Tech Stack

### Frontend Client
| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component-driven user interface |
| **TypeScript** | Strict compile-time type safety across all components and API responses |
| **Vite** | Next-generation frontend tooling and rapid HMR (Hot Module Replacement) |
| **Tailwind CSS & Shadcn UI** | Modern utility-first styling and accessible design components |
| **TanStack Router** | Type-safe declarative routing and nested layouts |
| **TanStack React Query** | Server-state management, cache invalidation, and data fetching |
| **Zustand** | Minimalist client-side global state management |
| **React Hook Form & Zod** | Declarative form handling with schema-driven validation |

### Dedicated Backend API
| Technology | Purpose |
| :--- | :--- |
| **Express.js & TypeScript** | Modular REST API server |
| **Prisma ORM** | Type-safe database client and migrations |
| **PostgreSQL** | Relational database persistence |
| **Cloudinary** | Cloud media storage and global CDN image delivery |
| **Socket.io / SSE** | Real-time bi-directional messaging |

---

## ?? Project Structure

\\\
scitech-community/
+-- src/
¦   +-- api/             # API mutation & query hooks (get, post, patch, delete)
¦   +-- components/      # Modular UI components (navbar, cards, chat, layout)
¦   +-- routes/          # TanStack file-based routes (community, feed, chat, profile)
¦   +-- store/           # Zustand state stores (UserStore, CommunityStore, PostStore)
¦   +-- types/           # TypeScript interfaces and data contracts
¦   +-- lib/             # Utility helpers & Cloudinary CDN resolver
¦   +-- App.tsx          # Application root with QueryClient provider
+-- public/              # Static public assets
+-- .env.example         # Environment template
+-- tailwind.config.js   # Tailwind design tokens
+-- package.json
\\\

---

## ?? Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- Running instance of the [SciTech Backend API](https://github.com/Atagherjames/scitech-community-backend)

### 2. Installation
\\\ash
cd scitech-community
npm install
\\\

### 3. Environment Setup
Create a \.env\ file in the root folder:
\\\env
# URL pointing to your Express backend (local or deployed)
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_OWNER_ID=scitech-admin
\\\

### 4. Run Development Server
\\\ash
npm run dev
\\\
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ?? Production Deployment (Vercel)

1. Push this repository to your GitHub:
   \\\ash
   git remote add origin https://github.com/Atagherjames/scitech-community.git
   git branch -M main
   git push -u origin main
   \\\
2. Import the project on [Vercel](https://vercel.com/new).
3. Set the Environment Variable:
   - \VITE_API_BASE_URL\ = \https://your-backend.onrender.com\ (your deployed backend URL)
4. Click **Deploy**. Vercel will automatically build and distribute your frontend globally!

---

## ????? Author & Engineering Contact

**James Atagher**  
Full-Stack Software Engineer  
- **GitHub:** [@Atagherjames](https://github.com/Atagherjames)  
- **Email:** [jamesatagher@gmail.com](mailto:jamesatagher@gmail.com)  
