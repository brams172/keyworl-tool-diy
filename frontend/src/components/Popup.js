import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';

function Popup() {
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [trends, setTrends] = useState(null);

  const fetchKeywordSuggestions = async () => {
    try {
      const response = await axios.get('/api/keyword-suggestions', { params: { query: keyword } });
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error('Error fetching keyword suggestions:', error);
    }
  };

  const fetchKeywordDifficulty = async () => {
    try {
      const response = await axios.get('/api/keyword-difficulty', { params: { keyword } });
      setDifficulty(response.data.difficulty);
    } catch (error) {
      console.error('Error fetching keyword difficulty:', error);
    }
  };

  const fetchKeywordTrends = async () => {
    try {
      const response = await axios.get('/api/keyword-trends', { params: { keyword } });
      setTrends(response.data.trends);
    } catch (error) {
      console.error('Error fetching keyword trends:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Popup</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={fetchKeywordSuggestions}
        style={{ marginTop: '10px' }}
      >
        Fetch Keyword Suggestions
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={fetchKeywordDifficulty}
        style={{ marginTop: '10px' }}
      >
        Fetch Keyword Difficulty
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={fetchKeywordTrends}
        style={{ marginTop: '10px' }}
      >
        Fetch Keyword Trends
      </Button>
      <div style={{ marginTop: '20px' }}>
        {suggestions.length > 0 && (
          <div>
            <Typography variant="h6">Suggestions:</Typography>
            {suggestions.map((suggestion, index) => (
              <Paper key={index} style={{ padding: '10px', margin: '5px 0' }}>
                {suggestion}
              </Paper>
            ))}
          </div>
        )}
        {difficulty !== null && (
          <Paper style={{ padding: '10px', marginTop: '20px' }}>
            <Typography variant="body1">Difficulty: {difficulty}</Typography>
          </Paper>
        )}
        {trends !== null && (
          <Paper style={{ padding: '10px', marginTop: '20px' }}>
            <Typography variant="body1">Trends: {trends}</Typography>
          </Paper>
        )}
      </div>
    </Paper>
  );
}

export default Popup;
