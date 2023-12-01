// Retrieve User Information
let createUserButton = document.getElementById("create_user");
let signInButton = document.getElementById("sign-in");

// Rerieve Username, Password and email elements
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let confirmElement = document.getElementById ("confirm_password");

let emailValue = '';
let passwordValue = '';
let confirmValue = '';

emailElement.addEventListener("keydown", (e) => {
    emailValue = e.target.value
})

passwordElement.addEventListener("keyup", (e) => {
    passwordValue = e.target.value
})

confirmElement.addEventListener("keyup", (e) => {
    confirmValue = e.target.value
})

// Function to create new User
let createNewUser = (e) => {
    e.preventDefault();
    
    console.log(emailValue)
    console.log(passwordValue)
    console.log(confirmValue)
    // 1: Validate Password
    if (!validatePassword(passwordValue))
        alert("Password not valid")

    // 2: Ensure passwords match
    else if (passwordValue!=confirmValue)
        alert("Passwords don't match")  
    

    
    // console.log(email.value);
    // console.log(password.value);
    // console.log(confirm.value); 
    
    else 
        window.location.href = './Create';    
    
        // Password Validation code
    function validatePassword(password) {
      // Minimum length of 8 characters
      if (password.length < 8) {
          return false;
      }

      // At least one uppercase letter
      if (!/[A-Z]/.test(password)) {
          return false;
      }

      // At least one lowercase letter
      if (!/[a-z]/.test(password)) {
          return false;
      }

      // At least one digit
      if (!/\d/.test(password)) {
          return false;
      }

      // At least one special character (you can customize this list)
      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
          return false;
      }

      // If all conditions are met, the password is valid
      return true;
    }
}


// Function to Sign-In User
let signInUser = (e) => {
    e.preventDefault();
    //retrive email and password
    let email = document.getElementById("email-input");
    let password = document.getElementById("password-input");
    console.log(email.value);
    console.log(password.value);
}

createUserButton.addEventListener("click", createNewUser);
signInButton.addEventListener("click", signInUser); 

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
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

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

// // function createUser() {
// //   let user = {
// //     user_email: "test.user@example.com",
// //     user_password: "password",
// //     first_name: "John2",
// //     last_name: "Doe2",
// //     address: "123 Main St",
// //     initial_deposit: 1000
// //   };

// //   //Submit user to back-end
// //   axios
// //     .post("http://localhost:8080/signup", user)
// //     .then(function (response) {
// //       console.log(response);
// //     })
// //     .catch(function (error) {
// //       console.log(error);
// //     });
// // }

// let createButton = document.getElementById("create_user");
// // function createUser() {
// //   alert("Create User");
// //   window.location.href = "/Create";
// // }

// createButton.addEventListener("click", createUser);
console.log("Hello World");
