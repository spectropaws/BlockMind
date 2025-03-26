import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import db from './config/db.js';
import passportConfig from './config/passport.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Connect to MongoDB
db();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/auth-app' 
  }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport configuration
passportConfig(passport);

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const passport = require('passport');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// require('dotenv').config();

// const app = express();

// // Connect to MongoDB
// require('./config/db');

// // Body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // CORS configuration
// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:5173',
//   credentials: true
// }));

// // Session configuration
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({ 
//     mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/auth-app' 
//   }),
//   cookie: {
//     maxAge: 24 * 60 * 60 * 1000 // 1 day
//   }
// }));

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Initialize Passport configuration
// require('./config/passport');

// // Routes
// app.use('/api/auth', require('./routes/auth'));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: 'Internal server error',
//     error: process.env.NODE_ENV === 'production' ? {} : err
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

