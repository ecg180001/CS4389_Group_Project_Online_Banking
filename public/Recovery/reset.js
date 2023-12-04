// script.js

// Import necessary modules from Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail as sendResetEmail } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuKAfYwg0EI8Jvhu3AzaS1g0UzQTLCnm8",
  authDomain: "banking-app-7dc34.firebaseapp.com",
  projectId: "banking-app-7dc34",
  storageBucket: "banking-app-7dc34.appspot.com",
  messagingSenderId: "140471001163",
  appId: "1:140471001163:web:5a2e8c33ce9c7253756dce",
  measurementId: "G-WX73PJM3QQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Function to send a password reset email
function sendPasswordResetEmail() {
  const resetEmail = document.getElementById('reset-email').value;
  const auth = getAuth();

  sendResetEmail(auth, resetEmail)
    .then(() => {
      console.log('Password reset email sent successfully!');
      alert('Password reset email sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending password reset email:', error.message);
      alert('Error sending password reset email: ' + error.message);
    });
}

// Wait for the document to fully load before setting up event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Set up the event listener for the button
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', sendPasswordResetEmail);
});
