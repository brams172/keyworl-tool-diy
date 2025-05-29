import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';

function KeywordTrends() {
  const [keyword, setKeyword] = useState('');
  const [trends, setTrends] = useState(null);

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
      <Typography variant="h5" gutterBottom>Keyword Trends</Typography>
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
        onClick={fetchKeywordTrends}
        style={{ marginTop: '10px' }}
      >
        Fetch Keyword Trends
      </Button>
      {trends !== null && (
        <Paper style={{ padding: '10px', marginTop: '20px' }}>
          <Typography variant="body1">Trends: {trends}</Typography>
        </Paper>
      )}
    </Paper>
  );
}

export default KeywordTrends;
