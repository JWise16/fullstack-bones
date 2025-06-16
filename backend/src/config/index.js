require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  projectUrl: process.env.PROJECT_URL || 'http://localhost:3000',
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    jwtSecret: process.env.SUPABASE_JWT_SECRET,
    projectUrl: process.env.SUPABASE_PROJECT_URL,
  },
  jwt: {
    secret: process.env.SUPABASE_JWT_SECRET,
    issuer: process.env.SUPABASE_PROJECT_URL ? `${process.env.SUPABASE_PROJECT_URL}/auth/v1` : undefined,
    audience: 'authenticated',
  },
  cors: {
    origin: [
      process.env.FRONTEND_URL || 'http://localhost:3000',
      process.env.FRONTEND_DEV_URL || 'http://localhost:3001'
    ],
    credentials: true
  }
};

// Validate required environment variables
const requiredEnvVars = ['SUPABASE_JWT_SECRET', 'SUPABASE_URL', 'SUPABASE_KEY'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars.join(', '));
  process.exit(1);
}

module.exports = config; 