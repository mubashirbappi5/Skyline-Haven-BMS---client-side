# Skyline Haven (Client)

Welcome to **Skyline Haven**, a platform designed to provide users with a seamless experience for apartment and rental management. This website allows users to view, request, and manage apartments, and also enables admins to approve or reject rental requests.

## Live Site URLs

- **Frontend (Client):** [https://skyline-haven-client.vercel.app](https://skyline-haven-client.vercel.app)
- **Backend (Server):** [https://skyline-haven-server.vercel.app](https://skyline-haven-server.vercel.app)

## Admin & Demo Credentials

- **Admin email:** `admin@demo.com` / **Password:** `password123`
- **Member email:** `member@demo.com` / **Password:** `password123`

## Features

1. **User Registration and Login**: Allows users to sign up and log into the platform securely via Email or Google Auth.
2. **Apartment Listings**: Users can view available apartments with detailed information, such as location, rent, and features.
3. **Request to Rent**: Users can submit a rental request for a selected apartment.
4. **Maintenance Request System**: Members can submit maintenance issues (plumbing, electrical, etc.) and Admins can track and update the status in real-time.
5. **Admin Dashboard**: Admins can view, approve, or reject rental requests, manage members, and resolve maintenance tasks.
6. **Premium UI/UX**: The application features a high-end, modern design with smooth animations powered by Framer Motion, glassmorphism elements, and engaging micro-interactions.
7. **Announcements**: Admin can broadcast global announcements to all members.
8. **Secure Authentication**: Utilizes JWT tokens and strong password validation for user and admin authentication.

## Technologies Used

### Frontend:
- **React.js**: JavaScript library for building user interfaces.
- **Vite**: Next Generation Frontend Tooling.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Framer Motion**: For premium animations and interactive UI components.
- **React Router**: For handling navigation between pages.
- **Axios**: For making HTTP requests to the back-end (interceptors for secure requests).
- **React Hook Form**: For managing form states and validation.
- **Cloudinary**: For uploading and managing images.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file based on `.env.example`.
4. Run `npm run dev` to start the local development server.

## Deployment

This frontend is configured to deploy automatically on **Vercel**. Use the provided `deploy.cjs` script to pass environment variables and trigger a Vercel build automatically.
