const express = require('express');
const router = express.Router();
const firebase = require('../config/firebaseConfig');

router.post('/google', async (req, res) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    res.json(result.user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/facebook', async (req, res) => {
  const provider = new firebase.auth.FacebookAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    res.json(result.user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/email', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    res.json(result.user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
