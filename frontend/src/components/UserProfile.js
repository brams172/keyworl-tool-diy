import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';

function UserProfile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put('/api/auth/update-profile', { email, password });
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/api/auth/reset-password', { email, newPassword });
      console.log('Password reset:', response.data);
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>User Profile</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleUpdateProfile}
        style={{ marginTop: '10px' }}
      >
        Update Profile
      </Button>
      <TextField
        fullWidth
        variant="outlined"
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleResetPassword}
        style={{ marginTop: '10px' }}
      >
        Reset Password
      </Button>
    </Paper>
  );
}

export default UserProfile;
