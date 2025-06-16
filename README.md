# Full-Stack React Template

A modern, production-ready full-stack template featuring React, Node.js, and Supabase. This template provides a solid foundation for building scalable web applications with authentication, database integration, and containerized deployment.

## 🚀 Features

- **Modern Tech Stack:**
  - React 18+ with TypeScript
  - Node.js/Express backend
  - Supabase for authentication and database
  - Docker containerization
  - Nginx for production serving

- **Authentication:**
  - Complete Supabase Auth integration
  - JWT-based authentication
  - Protected routes
  - Session management

- **Development Experience:**
  - Hot reloading
  - TypeScript support
  - ESLint and Prettier configuration
  - Docker development environment
  - Environment variable management

- **Production Ready:**
  - Optimized Docker builds
  - Nginx configuration
  - Environment-specific builds
  - Security best practices

## 🛠️ Tech Stack Details

### Frontend
- React 18+
- TypeScript
- React Router v6
- Axios for API calls
- TailwindCSS (optional)
- React Query (optional)

### Backend
- Node.js
- Express
- TypeScript
- JWT validation
- CORS configuration
- Request validation

### Database & Auth
- Supabase
  - PostgreSQL database
  - Real-time subscriptions
  - Row Level Security (RLS)
  - Authentication providers

### DevOps
- Docker & Docker Compose
- Nginx
- Environment configuration
- Development & production builds

## 📦 Project Structure

```
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API services
│   │   ├── types/        # TypeScript types
│   │   └── utils/        # Utility functions
│   └── public/           # Static files
│
├── backend/              # Node.js backend application
│   ├── src/
│   │   ├── controllers/ # Route controllers
│   │   ├── middleware/  # Custom middleware
│   │   ├── routes/      # API routes
│   │   ├── services/    # Business logic
│   │   └── utils/       # Utility functions
│   └── tests/           # Backend tests
│
├── nginx/               # Nginx configuration
├── docker/             # Docker configuration files
└── scripts/            # Utility scripts
```

## 🚀 Getting Started

1. **Clone the template:**
   ```bash
   git clone https://github.com/yourusername/fullstack-template.git
   cd fullstack-template
   ```

2. **Environment Setup:**
   Create the following `.env` files:

   a. **Root `.env**:
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

   b. **Frontend `.env**:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   c. **Backend `.env**:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

3. **Supabase Setup:**
   - Create a new Supabase project
   - Enable authentication providers
   - Set up your database schema
   - Configure RLS policies
   - Get your project credentials

4. **Development:**
   ```bash
   # Start development environment
   ./startup-dev.sh

   # Or manually:
   docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
   ```

5. **Production:**
   ```bash
   # Start production environment
   ./startup-prod.sh

   # Or manually:
   docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build
   ```

## 🔧 Customization Guide

### Adding New Features

1. **New API Endpoint:**
   - Add route in `backend/src/routes/`
   - Create controller in `backend/src/controllers/`
   - Add service logic in `backend/src/services/`

2. **New Frontend Page:**
   - Create component in `frontend/src/pages/`
   - Add route in `frontend/src/App.tsx`
   - Create API service in `frontend/src/services/`

3. **Database Changes:**
   - Create migrations in Supabase
   - Update RLS policies
   - Add types in `frontend/src/types/`

### Styling

- Default styling uses CSS modules
- Can be easily switched to TailwindCSS or styled-components
- Global styles in `frontend/src/styles/`

### Authentication

- Supabase Auth is pre-configured
- Additional providers can be added in Supabase dashboard
- Auth state management in `frontend/src/contexts/`

## 📚 API Documentation

### Authentication Endpoints

- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user

### Protected Routes

- `GET /api/protected` - Example protected route
- Add your protected routes in `backend/src/routes/`

## 🔍 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

## 🚢 Deployment

### Production Deployment

1. **Build the application:**
   ```bash
   ./startup-prod.sh
   ```

2. **Environment Variables:**
   - Update production `.env` files
   - Set production Supabase credentials
   - Configure production URLs

3. **Nginx Configuration:**
   - SSL configuration in `nginx/conf.d/`
   - Production settings in `nginx/nginx.conf`

### Deployment Options

1. **Traditional VPS:**
   - Deploy using Docker Compose
   - Configure Nginx as reverse proxy
   - Set up SSL with Let's Encrypt

2. **Cloud Platforms:**
   - AWS Elastic Beanstalk
   - Google Cloud Run
   - DigitalOcean App Platform

## 🔐 Security Considerations

- JWT validation
- CORS configuration
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- CSRF protection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Supabase for the backend services
- Docker team for containerization
- All contributors and users of this template
