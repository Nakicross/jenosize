const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyD-IyQRjwp4U-I-vV4OeKkbxv_FvrKa1o0",
  authDomain: "jinosize-test.firebaseapp.com",
  projectId: "jinosize-test",
  storageBucket: "jinosize-test.appspot.com",
  messagingSenderId: "518474024196",
  appId: "1:518474024196:web:44176b63494b9b1204bc51",
  measurementId: "G-XYEVVCQXX6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

module.exports = firebase;
