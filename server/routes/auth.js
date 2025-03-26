// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const authController = require('../controller/authController');
// const { isAuthenticated } = require('../middleware/auth');

import express from "express";
import passport from "passport";
import {
  getCurrentUser,
  login,
  logout,
  register,
} from "../controller/authController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();
// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Get current user route
router.get("/user", isAuthenticated, getCurrentUser);

// Logout route
router.post("/logout", logout);

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.CLIENT_URL + "/login?error=oauth-failed",
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL || "http://localhost:3000");
  }
);

export default router;
