// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   const username = loginForm.username.value;
//   const password = loginForm.password.value;
//   console.log(username);
//   console.log(password);
//   // if (username === "user" && password === "web_dev") {
//   //     alert("You have successfully logged in.");
//   //     location.reload();
//   // } else {
//   //     loginErrorMsg.style.opacity = 1;
//   // }
// });

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

// Function to log in the user
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Use Firebase Auth to sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
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