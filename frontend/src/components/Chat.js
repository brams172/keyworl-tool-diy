import React, { useState } from 'react';
    import axios from 'axios';
    import { TextField, Button, Paper, Typography } from '@mui/material';

    function Chat() {
      const [messages, setMessages] = useState([]);
      const [input, setInput] = useState('');

      const handleSend = async () => {
        if (!input.trim()) return;
        
        try {
          const response = await axios.post('/api/chat', { message: input });
          setMessages(prev => [...prev, 
            { text: input, sender: 'user' },
            { text: response.data.reply, sender: 'bot' }
          ]);
          setInput('');
        } catch (error) {
          console.error('Error sending message:', error);
        }
      };

      return (
        <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
          <Typography variant="h5" gutterBottom>Chat</Typography>
          <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <Paper style={{ 
                  padding: '10px', 
                  margin: '5px', 
                  display: 'inline-block',
                  backgroundColor: msg.sender === 'user' ? '#e3f2fd' : '#f5f5f5'
                }}>
                  {msg.text}
                </Paper>
              </div>
            ))}
          </div>
          <TextField
            fullWidth
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSend}
            style={{ marginTop: '10px' }}
          >
            Send
          </Button>
        </Paper>
      );
    }

    export default Chat;
