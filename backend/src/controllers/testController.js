const testController = {
  getPublic: (req, res) => {
    res.send('StoryTown Backend operational');
  },

  getProtected: (req, res) => {
    res.json({ 
      message: 'Authorized access',
      user: req.user.sub 
    });
  }
};

module.exports = testController; 