// --------------------------FireBase-------------------------------//
// Initializing Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

// Add Firebase products that you want to use
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const UID = "";
const ISAUTH = false;

// ------------------------Login Page Code ---------------------------//

// Remeber Make SIGN IN TOKEN THAT ENSURES THAT USER CANE ACCESS CREATE PAGE!!!!!!!

// Global Variable Declaration
let emailValue = "";
let passwordValue = "";
let confirmValue = "";

let tempFirstValue = "";
let tempLastValue = "";
let tempBalance = "";

let bodyLogin = document.getElementById("loginBody");
let createUserBody = document.getElementById("createUserBody");
let bodyDashboard = document.getElementById("dashboardBody");

function loginBody() {
  // Retrieve User Information
  let createUserButton = document.getElementById("create_user");

  let signInButton = document.getElementById("sign-in");

  // Rerieve Username, Password and email elements
  let emailElement = document.getElementById("email");
  let passwordElement = document.getElementById("password");
  let confirmElement = document.getElementById("confirm_password");

  emailElement.addEventListener("keydown", (e) => {
    emailValue = e.target.value;
  });

  passwordElement.addEventListener("keyup", (e) => {
    passwordValue = e.target.value;
  });

  confirmElement.addEventListener("keyup", (e) => {
    confirmValue = e.target.value;
  });

  // - -------------- function to create new User -------------------------
  let createNewUser = (e) => {
    e.preventDefault();

    console.log(emailValue);
    console.log(passwordValue);
    console.log(confirmValue);
    // 1: Validate Password
    if (!validatePassword(passwordValue)) alert("Password not valid");
    // 2: Ensure passwords match
    else if (passwordValue != confirmValue) alert("Passwords don't match");

    else {
      window.location = "./Create";
    }

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
      return !!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
    }
  };
  
  //  -------------------- Function to Sign-In User ---------------------------//
  let signInUser = (e) => {
    e.preventDefault();
    //retrive email and password
    let email = document.getElementById("email-input");
    let password = document.getElementById("password-input");
    console.log(email.value);
    console.log(password.value);
    login();
  };
  
  createUserButton.addEventListener("click", createNewUser);
  signInButton.addEventListener("click", signInUser);
  

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

    // Use Firebase Auth to sign in the user
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)

    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      // Your Express.js server endpoint for user login
      const expressEndpoint = 'http://localhost:8080/signin'; // Replace with your actual server URL

      // Request data to send to the server
      const requestData = {
        uid: user.uid,
      };

      try {
        const response = await fetch(expressEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        // Do something with the response data, such as updating the UI or redirecting the user

      } catch (error) {
        console.error('Error during login:', error);
      }

      window.location = "./Auth";

    })
    .catch((error) => {
      alert("Invalid Credentials");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during sign-in:', errorCode, errorMessage);
    });
  }
}

bodyLogin.addEventListener("load", loginBody());
bodyCreate.addEventListener("load", createUserPage());
bodyDashboard.addEventListener("load", populateDashboard());
// loginBody();

// #########################################################################//

// ------------------------Create User Page Code ---------------------------//

function createUserPage() {
  let signUpButton = document.getElementById("signUP");
  console.log(signUpButton);

  function createUser() {
    alert("sign up button clicked");
    let firstName = document.getElementById("firstName").value;
    tempFirstValue = firstName;
    let lastName = document.getElementById("lastName").value;
    tempLastValue = lastName;
    let address = document.getElementById("address").value;
    let initialDeposit = document.getElementById("deposit").value;
    tempBalance = initialDeposit;
    let user = {
      user_email: emailValue,
      user_password: passwordValue,
      first_name: firstName,
      last_name: lastName,
      address: address,
      initial_deposit: initialDeposit
    };


    console.log(user);
    window.location = "../../Dashboard/newAccount.html"
    //   //Submit user to back-end
    //   axios
    //     .post("http://localhost:8080/signup", user)
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  }

  createUser();
}

function populateDashboard() {
  let userFullName = document.getElementById("userFullName");
  alert(userFullName);
  userFullName.value = tempFirstValue + " " + tempLastValue;
  let userBalance = document.getElementById("userBalance");
  alert(userBalance);
  userBalance.value = tempBalance;
}