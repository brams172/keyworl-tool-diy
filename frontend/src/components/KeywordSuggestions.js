import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';

function KeywordSuggestions() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchKeywordSuggestions = async () => {
    try {
      const response = await axios.get('/api/keyword-suggestions', { params: { query } });
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error('Error fetching keyword suggestions:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Keyword Suggestions</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
      <div style={{ marginTop: '20px' }}>
        {suggestions.map((suggestion, index) => (
          <Paper key={index} style={{ padding: '10px', margin: '5px 0' }}>
            {suggestion}
          </Paper>
        ))}
      </div>
    </Paper>
  );
}

export default KeywordSuggestions;
