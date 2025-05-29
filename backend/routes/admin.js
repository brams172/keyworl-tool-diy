const express = require('express');
const User = require('../models/user');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add-admin-ip', protect, async (req, res) => {
  const { ipAddress } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }
    user.ipAddresses.push(ipAddress);
    await user.save();
    res.status(200).json({ message: 'IP address added successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add IP address' });
  }
});

router.post('/control-usage', protect, async (req, res) => {
  const { limit } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }
    // Implement logic to control usage and limitations based on the provided limit
    res.status(200).json({ message: 'Usage controlled successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to control usage' });
  }
});

module.exports = router;
