const firebase = require('firebase');
require('firebase/auth');

const authService = {
  signInWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      return result.user;
    } catch (error) {
      throw error; 
    }
  },
  
  signInWithFacebook: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      return result.user;
    } catch (error) {
      throw error;
    } 
  },
  
  signInWithEmail: async (email, password) => {
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password);
      return result.user;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = authService;
