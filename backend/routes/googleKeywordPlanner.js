const express = require('express');
    const axios = require('axios');
    const router = express.Router();

    router.get('/keywords', async (req, res) => {
      try {
        const { query } = req.query;
        const response = await axios.get('https://googleapis.com/keywordplanner/v3/keywords', {
          params: { query },
          headers: { Authorization: `Bearer ${process.env.GOOGLE_OAUTH_TOKEN}` }
        });
        res.json({ keywords: response.data.keywords });
      } catch (error) {
        console.error('Error with Google Keyword Planner API:', error.message);
        res.status(500).json({ error: 'Failed to fetch keywords from Google' });
      }
    });

    module.exports = router;
