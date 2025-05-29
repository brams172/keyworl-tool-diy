const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const googleKeywordPlannerRoutes = require('./routes/googleKeywordPlanner');
const mozRoutes = require('./routes/moz');
const deepSeekRoutes = require('./routes/deepSeek');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const googleGeminiRoutes = require('./routes/googleGemini');
const openAIRoutes = require('./routes/openAI');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/google', googleKeywordPlannerRoutes);
app.use('/api/moz', mozRoutes);
app.use('/api/deepseek', deepSeekRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/google-gemini', googleGeminiRoutes);
app.use('/api/openai', openAIRoutes);

app.get('/', (req, res) => {
  res.send('Keyword Tool Backend is Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
