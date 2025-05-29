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

router.get('/deep-seek-keyword-suggestions', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://deepseek.api.url/v3/keyword-suggestions?query=${query}&api_key=${process.env.DEEP_SEEK_API_KEY}`);
    res.json({ query, suggestions: response.data.suggestions });
  } catch (error) {
    console.error('Error with Deep Seek API:', error.message);
    res.status(500).json({ error: 'Failed to fetch deep seek keyword suggestions' });
  }
});

router.get('/deep-seek-keyword-difficulty', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get(`https://deepseek.api.url/v3/keyword-difficulty?keyword=${keyword}&api_key=${process.env.DEEP_SEEK_API_KEY}`);
    res.json({ keyword, difficulty: response.data.difficulty });
  } catch (error) {
    console.error('Error with Deep Seek API:', error.message);
    res.status(500).json({ error: 'Failed to fetch deep seek keyword difficulty' });
  }
});

router.get('/deep-seek-keyword-trends', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get(`https://deepseek.api.url/v3/keyword-trends?keyword=${keyword}&api_key=${process.env.DEEP_SEEK_API_KEY}`);
    res.json({ keyword, trends: response.data.trends });
  } catch (error) {
    console.error('Error with Deep Seek API:', error.message);
    res.status(500).json({ error: 'Failed to fetch deep seek keyword trends' });
  }
});

module.exports = router;
