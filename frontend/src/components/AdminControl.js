import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';

function AdminControl() {
  const [ipAddress, setIpAddress] = useState('');
  const [usageLimit, setUsageLimit] = useState('');

  const handleAddIpAddress = async () => {
    try {
      const response = await axios.post('/api/admin/add-admin-ip', { ipAddress });
      console.log('IP address added:', response.data);
    } catch (error) {
      console.error('Error adding IP address:', error);
    }
  };

  const handleControlUsage = async () => {
    try {
      const response = await axios.post('/api/admin/control-usage', { limit: usageLimit });
      console.log('Usage controlled:', response.data);
    } catch (error) {
      console.error('Error controlling usage:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Admin Control</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="IP Address"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAddIpAddress}
        style={{ marginTop: '10px' }}
      >
        Add IP Address
      </Button>
      <TextField
        fullWidth
        variant="outlined"
        label="Usage Limit"
        value={usageLimit}
        onChange={(e) => setUsageLimit(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleControlUsage}
        style={{ marginTop: '10px' }}
      >
        Control Usage
      </Button>
    </Paper>
  );
}

export default AdminControl;
