// Initializing Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

// Add Firebase products that you want to use
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuKAfYwg0EI8Jvhu3AzaS1g0UzQTLCnm8",
  authDomain: "banking-app-7dc34.firebaseapp.com",
  projectId: "banking-app-7dc34",
  storageBucket: "banking-app-7dc34.appspot.com",
  messagingSenderId: "140471001163",
  appId: "1:140471001163:web:5a2e8c33ce9c7253756dce",
  measurementId: "G-WX73PJM3QQ"
};

initializeApp(firebaseConfig);

// Function to log in the user
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  alert(email);
  alert(password);

  // Use Firebase Auth to sign in the user
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User is signed in, and you can get the ID token
      const user = userCredential.user;
      return user.getIdToken();
    })
    .then((idToken) => {
      // Log the ID token to the console
      console.log("User ID token:", idToken);
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error (${errorCode}): ${errorMessage}`);
    });
}

function createUser() {
  let user = {
    user_email: "test.user@example.com",
    user_password: "password",
    first_name: "John2",
    last_name: "Doe2",
    address: "123 Main St",
    initial_deposit: 1000
  };

  // Submit user to back-end
  axios
    .post("http://localhost:8080/signup", user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
