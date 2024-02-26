const firebase = require('firebase');
require('firebase/auth');
const authService = require('./authservice');
const axios = require('axios');

exports.signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await authService.signInWithPopup(provider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

exports.signInWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  try {
    const result = await authService.signInWithPopup(provider);
    return result.user;
  } catch (error) {
    throw error; 
  }
};

exports.signInWithEmail = async (email, password) => {
  try {
    const result = await authService.signInWithEmailAndPassword(email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};
