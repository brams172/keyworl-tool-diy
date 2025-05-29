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

router.get('/moz-keyword-suggestions', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get('https://lsapi.seomoz.com/v2/keyword_suggestions', {
      params: {
        token: process.env.MOZ_ACCESS_TOKEN,
        query
      }
    });
    res.json({ query, suggestions: response.data.suggestions });
  } catch (error) {
    console.error('Error with Moz API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword suggestions from Moz' });
  }
});

router.get('/moz-keyword-trends', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get('https://lsapi.seomoz.com/v2/keyword_trends', {
      params: {
        token: process.env.MOZ_ACCESS_TOKEN,
        keyword
      }
    });
    res.json({ keyword, trends: response.data.trends });
  } catch (error) {
    console.error('Error with Moz API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword trends from Moz' });
  }
});

module.exports = router;
