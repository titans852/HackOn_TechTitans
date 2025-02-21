const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get leaderboard
router.get('/', async (req, res) => {
  const users = await User.find().sort({ points: -1 }).limit(10);
  res.status(200).json(users);
});

module.exports = router;