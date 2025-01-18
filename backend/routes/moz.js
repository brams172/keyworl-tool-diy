const express = require('express');
    const axios = require('axios');
    const router = express.Router();

    router.get('/keyword-difficulty', async (req, res) => {
      try {
        const { keyword } = req.query;
        const response = await axios.get('https://lsapi.seomoz.com/v2/url_metrics', {
          params: {
            token: process.env.MOZ_ACCESS_TOKEN,
            keyword
          }
        });
        res.json({ keyword, difficulty: response.data.keyword_difficulty });
      } catch (error) {
        console.error('Error with Moz API:', error.message);
        res.status(500).json({ error: 'Failed to fetch keyword difficulty' });
      }
    });

    module.exports = router;
