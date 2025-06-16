const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Environment variables
const JWT_SECRET = process.env.SUPABASE_JWT_SECRET;
if (!JWT_SECRET) {
  console.error('SUPABASE_JWT_SECRET environment variable is not set');
  process.exit(1);
}

// Middleware
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3000'],
  credentials: true,
}));

app.use(express.json());

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: Missing Authorization header' });
  }

  const tokenParts = authHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  const token = tokenParts[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256'],
      issuer: 'https://phcmaevoakhwqcldsqxz.supabase.co/auth/v1',
      audience: 'authenticated'
    });

    req.user = decoded;
    next();
  } catch (err) {
    const status = err.name === 'TokenExpiredError' ? 401 : 403;
    return res.status(status).json({ 
      error: `Authorization failed: ${err.message.replace(/^JWT\s?/, '')}` 
    });
  }
};

// Routes
app.get('/api/protected', validateToken, (req, res) => {
  res.json({ 
    message: 'Authorized access',
    user: req.user.sub 
  });
});

app.get('/', (req, res) => {
  res.send('StoryTown Backend operational');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
