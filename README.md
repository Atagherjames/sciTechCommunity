# SciTech Community Frontend Client

A responsive, component-driven web application built with React, TypeScript, Vite, and Tailwind CSS for the SciTech Community collaboration platform.

**Author:** James Atagher ([GitHub](https://github.com/Atagherjames) | [Email](mailto:jamesatagher@gmail.com))

---

## Technical Overview

The SciTech Community frontend provides an interface for discovering interest-based technical communities, participating in threaded forum discussions, exchanging direct messages, and managing user profiles.

### Core Features
- **Community Discovery:** Filter and search communities across Science, Technology, Artificial Intelligence, and Biotechnology by category, membership type, and pricing.
- **Discussion Feed:** Create, view, and interact with community posts containing formatted text and Cloudinary-hosted media attachments.
- **Direct Messaging:** Real-time chat system with conversation threads, unread counters, and automated updates via WebSockets and Server-Sent Events.
- **Member Directory:** Profile management, user bios, location metadata, and contributor verification badges.
- **State Management:** Decoupled architecture utilizing TanStack React Query for server cache synchronization and Zustand for client-side state.

---

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS, Shadcn UI, Class Variance Authority (CVA)
- **Routing:** TanStack Router
- **Data Fetching & Cache:** TanStack React Query (v5)
- **State Management:** Zustand
- **Form Handling:** React Hook Form, Zod schema validation
- **Icons:** Lucide React, Tabler Icons

---

## Project Structure

`
src/
+-- api/             # TanStack Query mutations and data fetching hooks
+-- components/      # Reusable UI elements, layout components, navigation, and modals
+-- enums/           # Enumerated types for categories, pricing, and community types
+-- lib/             # Utility functions, helper scripts, and Cloudinary CDN URL resolver
+-- routes/          # TanStack Router file-based route definitions
+-- store/           # Zustand global state slices (UserStore, CommunityStore, PostStore)
+-- types/           # Domain TypeScript type definitions and API contracts
+-- App.tsx          # Root application wrapper with QueryClient configuration
+-- main.tsx         # Application entry point
`

---

## Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Active backend service running locally or on a remote host

### 2. Installation
`ash
npm install
`

### 3. Environment Setup
Create a .env file in the root directory:
`env
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_OWNER_ID=scitech-admin
`

### 4. Development Server
`ash
npm run dev
`
Access the application at http://localhost:5173.

---

## Production Deployment (Vercel)

1. Push this repository to GitHub under your account:
   `ash
   git remote add origin https://github.com/Atagherjames/scitech-community.git
   git branch -M main
   git push -u origin main
   `
2. Import the repository into Vercel.
3. Define the production environment variable:
   - VITE_API_BASE_URL: The URL of your deployed backend (e.g., https://scitech-community-backend.onrender.com).
4. Trigger the deployment build.

---

## License & Authorship

Developed and maintained by **James Atagher**.  
Repository: [github.com/Atagherjames/scitech-community](https://github.com/Atagherjames/scitech-community)
