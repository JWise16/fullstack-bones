const express = require('express');
const cors = require('cors');
const config = require('./src/config');
const testRoutes = require('./src/routes/testRoutes');

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());

// Routes
app.use('/api', testRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
