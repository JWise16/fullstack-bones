const testController = {
  getPublic: (req, res) => {
    res.send('Backend API is operational');
  },

  getProtected: (req, res) => {
    res.json({ 
      message: 'Authorized access',
      user: req.user.sub 
    });
  }
};

module.exports = testController; 