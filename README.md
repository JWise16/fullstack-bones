Absolutely! Here’s a **comprehensive README template** tailored for your StoryTown repository, covering setup, development, deployment, authentication, and troubleshooting.

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
   - Create a `.env` file in the root directory for backend variables:
     ```
     SUPABASE_URL=your-supabase-url
     SUPABASE_KEY=your-supabase-anon-key
     SUPABASE_JWT_SECRET=your-supabase-jwt-secret
     ```
   - For frontend, add `.env.local` in the `frontend` directory:
     ```
     REACT_APP_SUPABASE_URL=your-supabase-url
     REACT_APP_SUPABASE_KEY=your-supabase-anon-key
     ```

3. **Install dependencies:**
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
  - Ensure the backend allows requests from your frontend’s origin.
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
