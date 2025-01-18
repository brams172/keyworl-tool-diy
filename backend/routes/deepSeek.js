const express = require('express');
    const axios = require('axios');
    const router = express.Router();

    router.get('/deep-seek-keywords', async (req, res) => {
      try {
        const { query } = req.query;
        const response = await axios.get(`https://deepseek.api.url/v3/keywords?query=${query}&api_key=${process.env.DEEP_SEEK_API_KEY}`);
        res.json({ query, keywords: response.data.keywords });
      } catch (error) {
        console.error('Error with Deep Seek API:', error.message);
        res.status(500).json({ error: 'Failed to fetch deep seek keywords' });
      }
    });

    module.exports = router;
