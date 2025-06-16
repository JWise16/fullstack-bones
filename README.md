Absolutely! Here's a **comprehensive README template** tailored for your StoryTown repository, covering setup, development, deployment, authentication, and troubleshooting.

---

# StoryTown Pre-MVP

**StoryTown** is a modern web application leveraging Supabase for authentication and backend services, Docker for containerization, and React for the frontend. This repository contains the codebase for the pre-MVP phase.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Development](#development)
- [Production Deployment](#production-deployment)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication:** Secure sign-up, login, and logout using Supabase Auth.
- **Protected Routes:** Only authenticated users can access certain pages.
- **Customizable UI:** Modern, responsive interface built with React.
- **Containerized Deployment:** Easy development and deployment with Docker.

---

## Technologies

- **Frontend:** React, React Router, Supabase Auth UI (optional)
- **Backend:** Node.js, Express, Supabase Auth, JWT
- **Containerization:** Docker, Docker Compose
- **Database & Auth:** Supabase
- **Other:** TypeScript, Nginx (for production frontend)

---

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JWise16/StoryTown-pre-mvp.git
   cd StoryTown-pre-mvp
   ```

2. **Environment Variables:**
   The project uses multiple `.env` files for different purposes:

   a. **Root `.env** (used by Docker Compose):
   ```env
   # Supabase Configuration
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   SUPABASE_JWT_SECRET=your_jwt_secret
   SUPABASE_PROJECT_URL=your_supabase_project_url

   # Frontend URLs
   FRONTEND_URL=http://localhost:3000
   FRONTEND_DEV_URL=http://localhost:3001
   PROJECT_URL=http://localhost:3000

   # Backend Configuration
   PORT=5000
   NODE_ENV=development
   ```

   b. **Backend `.env** (for local development):
   ```env
   # Backend-specific environment variables
   PORT=5000
   NODE_ENV=development

   # These will be overridden by Docker Compose
   SUPABASE_URL=
   SUPABASE_KEY=
   SUPABASE_JWT_SECRET=
   SUPABASE_PROJECT_URL=

   # These will be overridden by Docker Compose
   FRONTEND_URL=
   FRONTEND_DEV_URL=
   PROJECT_URL=
   ```

   c. **Frontend `.env** (for local development):
   ```env
   # Frontend-specific environment variables
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Setup steps:
   1. Copy `.env.example` to `.env` in the root directory
   2. Copy `backend/.env.example` to `backend/.env`
   3. Copy `frontend/.env.example` to `frontend/.env`
   4. Fill in the required values in each `.env` file

   Note: When running with Docker, the root `.env` file takes precedence and will override the values in the backend and frontend `.env` files.

3. **Supabase Setup:**
   
   a. **Create a Supabase Project:**
   1. Go to [Supabase](https://supabase.com) and sign in
   2. Click "New Project"
   3. Fill in your project details:
      - Name: "StoryTown"
      - Database Password: (create a secure password)
      - Region: (choose closest to your users)
   4. Wait for the project to be created

   b. **Get Project Configuration:**
   1. In your Supabase dashboard, go to Project Settings
   2. Under "API", you'll find:
      - Project URL (needed for `SUPABASE_URL` and `SUPABASE_PROJECT_URL`)
      - anon/public key (needed for `SUPABASE_KEY`)
   3. Under "JWT Settings", you'll find:
      - JWT Secret (needed for `SUPABASE_JWT_SECRET`)

   c. **Configure Authentication:**
   1. Go to Authentication > Settings
   2. Configure your auth providers:
      - Enable Email/Password authentication
      - Configure any additional providers (Google, GitHub, etc.)
   3. Under "URL Configuration":
      - Set Site URL to your frontend URL (e.g., `http://localhost:3000` for development)
      - Add additional redirect URLs if needed

   d. **Security Settings:**
   1. Go to Authentication > Policies
   2. Review and configure Row Level Security (RLS) policies
   3. Set up appropriate access controls for your tables

   e. **Environment Variables:**
   After getting your Supabase configuration, update your `.env` files:
   ```env
   # In root .env
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_KEY=your-anon-key
   SUPABASE_JWT_SECRET=your-jwt-secret
   SUPABASE_PROJECT_URL=https://your-project-id.supabase.co

   # In frontend/.env
   REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Install dependencies:**
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

---

## Development

- **Start development containers:**
  ```bash
  docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
  ```

  ... or better yet - just run
  ```bash
  chmod +x startup-dev.sh
  ./startup-dev.sh
  ```
- **Access the app:**  
  - **Frontend:** http://localhost:3001  
  - **Backend API:** http://localhost:5001  
  - **Ollama (if used):** http://localhost:11434

- **Hot reloading:**  
  - Changes to frontend and backend code will automatically reload in development.

---

## Production Deployment

- **Build and start production containers:**
  ```bash
  docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build
  ```

  ... or better yet - just run
  ```bash
  chmod +x startup-prod.sh
  ./startup-prod.sh
  ```
- **Access the app:**  
  - **Frontend:** http://localhost  
  - **Backend API:** http://localhost:5001

---

## Authentication

- **Authentication Flow:**  
  - Users sign up and log in via the frontend using Supabase Auth.
  - JWT tokens are issued and validated on protected backend routes.
- **Middleware:**  
  - The backend validates Supabase JWTs using the `SUPABASE_JWT_SECRET`.
  - Tokens are checked for issuer (`iss`) and audience (`aud`).

---

## API Endpoints

- **GET /**  
  - Description: Health check  
  - Response: `StoryTown Backend is running!`
- **GET /api/protected**  
  - Description: Protected route (requires valid JWT)  
  - Response: `{ message: 'You are authorized!' }`

---

## Troubleshooting

- **Docker Build Timeouts:**  
  - Add a `.dockerignore` file to exclude `node_modules` and other unnecessary files.
- **JWT Validation Errors:**  
  - Ensure `SUPABASE_JWT_SECRET` is set and matches the value in Supabase.
  - Decode the secret as base64 before use.
  - Log the token and secret for debugging.
- **CORS Issues:**  
  - Ensure the backend allows requests from your frontend's origin.
- **Environment Variables:**  
  - Check that variables are loaded in both Docker and your code.

For more details, see the [Troubleshooting Guide](#troubleshooting).

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.

---
