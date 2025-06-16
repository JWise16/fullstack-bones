const jwt = require('jsonwebtoken');
const config = require('../config');

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
    const decoded = jwt.verify(token, config.jwt.secret, {
      algorithms: ['HS256'],
      issuer: config.jwt.issuer,
      audience: config.jwt.audience
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

module.exports = {
  validateToken
}; 