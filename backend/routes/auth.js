const express = require('express');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcryptjs');
    const User = require('../models/user');
    const router = express.Router();

    router.post('/register', async (req, res) => {
      const { email, password } = req.body;
      try {
        const user = await User.create({ email, password });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
      } catch (error) {
        res.status(400).json({ error: 'Registration failed' });
      }
    });

    router.post('/login', async (req, res) => {
      const { email, password } = req.body;
      try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
      } catch (error) {
        res.status(400).json({ error: 'Login failed' });
      }
    });

    module.exports = router;
