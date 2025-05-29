import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';

function KeywordDifficulty() {
  const [keyword, setKeyword] = useState('');
  const [difficulty, setDifficulty] = useState(null);

  const fetchKeywordDifficulty = async () => {
    try {
      const response = await axios.get('/api/keyword-difficulty', { params: { keyword } });
      setDifficulty(response.data.difficulty);
    } catch (error) {
      console.error('Error fetching keyword difficulty:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Keyword Difficulty</Typography>
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
        onClick={fetchKeywordDifficulty}
        style={{ marginTop: '10px' }}
      >
        Fetch Keyword Difficulty
      </Button>
      {difficulty !== null && (
        <Paper style={{ padding: '10px', marginTop: '20px' }}>
          <Typography variant="body1">Difficulty: {difficulty}</Typography>
        </Paper>
      )}
    </Paper>
  );
}

export default KeywordDifficulty;
