const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/google-gemini-keywords', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://googleapis.com/gemini/v1/keywords?query=${query}&api_key=${process.env.GOOGLE_GEMINI_API_KEY}`);
    res.json({ query, keywords: response.data.keywords });
  } catch (error) {
    console.error('Error with Google Gemini API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keywords from Google Gemini' });
  }
});

router.get('/google-gemini-keyword-suggestions', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://googleapis.com/gemini/v1/keyword-suggestions?query=${query}&api_key=${process.env.GOOGLE_GEMINI_API_KEY}`);
    res.json({ query, suggestions: response.data.suggestions });
  } catch (error) {
    console.error('Error with Google Gemini API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword suggestions from Google Gemini' });
  }
});

router.get('/google-gemini-keyword-difficulty', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get(`https://googleapis.com/gemini/v1/keyword-difficulty?keyword=${keyword}&api_key=${process.env.GOOGLE_GEMINI_API_KEY}`);
    res.json({ keyword, difficulty: response.data.difficulty });
  } catch (error) {
    console.error('Error with Google Gemini API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword difficulty from Google Gemini' });
  }
});

router.get('/google-gemini-keyword-trends', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get(`https://googleapis.com/gemini/v1/keyword-trends?keyword=${keyword}&api_key=${process.env.GOOGLE_GEMINI_API_KEY}`);
    res.json({ keyword, trends: response.data.trends });
  } catch (error) {
    console.error('Error with Google Gemini API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword trends from Google Gemini' });
  }
});

router.get('/google-gemini-keyword-size', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get(`https://googleapis.com/gemini/v1/keyword-size?keyword=${keyword}&api_key=${process.env.GOOGLE_GEMINI_API_KEY}`);
    res.json({ keyword, size: response.data.size });
  } catch (error) {
    console.error('Error with Google Gemini API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword size from Google Gemini' });
  }
});

module.exports = router;
