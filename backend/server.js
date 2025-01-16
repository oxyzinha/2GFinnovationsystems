// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const sendEmail = require('./mailer');
const nodemailer = require('nodemailer');

const app = express();

// Add this to check if env variables are loaded
console.log('Email configured for:', process.env.EMAIL_USER);

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Email route with better error handling
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    console.log('Received form data:', { name, email, message });
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide all required fields' 
      });
    }

    const info = await sendEmail({ name, email, message });
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through Ethereal
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    res.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to send email' 
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
