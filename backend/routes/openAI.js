const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/openai-keywords', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Generate keywords for: ${query}`,
      max_tokens: 50,
      api_key: process.env.OPENAI_API_KEY
    });
    res.json({ query, keywords: response.data.choices[0].text.split(',') });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keywords from OpenAI' });
  }
});

router.get('/openai-keyword-suggestions', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Generate keyword suggestions for: ${query}`,
      max_tokens: 50,
      api_key: process.env.OPENAI_API_KEY
    });
    res.json({ query, suggestions: response.data.choices[0].text.split(',') });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword suggestions from OpenAI' });
  }
});

router.get('/openai-keyword-difficulty', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Generate keyword difficulty for: ${keyword}`,
      max_tokens: 50,
      api_key: process.env.OPENAI_API_KEY
    });
    res.json({ keyword, difficulty: response.data.choices[0].text });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword difficulty from OpenAI' });
  }
});

router.get('/openai-keyword-trends', async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Generate keyword trends for: ${keyword}`,
      max_tokens: 50,
      api_key: process.env.OPENAI_API_KEY
    });
    res.json({ keyword, trends: response.data.choices[0].text });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).json({ error: 'Failed to fetch keyword trends from OpenAI' });
  }
});

module.exports = router;
