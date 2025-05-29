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
    const keywords = response.data.keywords;

    // Fetch additional size numbers using Google Gemini API
    const sizeResponses = await Promise.all(
      keywords.map(keyword => 
        axios.get('https://googleapis.com/gemini/v1/keyword-size', {
          params: { keyword },
          headers: { Authorization: `Bearer ${process.env.GOOGLE_GEMINI_API_KEY}` }
        })
      )
    );

    const keywordsWithSize = keywords.map((keyword, index) => ({
      keyword,
      size: sizeResponses[index].data.size
    }));

    res.json({ keywords: keywordsWithSize });
  } catch (error) {
    console.error('Error with Google Keyword Planner API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keywords from Google' });
  }
});

router.get('/google-keyword-suggestions', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get('https://googleapis.com/keywordplanner/v3/keyword-suggestions', {
      params: { query },
      headers: { Authorization: `Bearer ${process.env.GOOGLE_OAUTH_TOKEN}` }
    });
    res.json({ query, suggestions: response.data.suggestions });
  } catch (error) {
    console.error('Error with Google Keyword Planner API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword suggestions from Google' });
  }
});

router.get('/google-keyword-difficulty', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get('https://googleapis.com/keywordplanner/v3/keyword-difficulty', {
      params: { keyword },
      headers: { Authorization: `Bearer ${process.env.GOOGLE_OAUTH_TOKEN}` }
    });
    res.json({ keyword, difficulty: response.data.difficulty });
  } catch (error) {
    console.error('Error with Google Keyword Planner API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword difficulty from Google' });
  }
});

router.get('/google-keyword-trends', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get('https://googleapis.com/keywordplanner/v3/keyword-trends', {
      params: { keyword },
      headers: { Authorization: `Bearer ${process.env.GOOGLE_OAUTH_TOKEN}` }
    });
    res.json({ keyword, trends: response.data.trends });
  } catch (error) {
    console.error('Error with Google Keyword Planner API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword trends from Google' });
  }
});

module.exports = router;
