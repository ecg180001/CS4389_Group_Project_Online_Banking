const express = require('express');
const admin = require('firebase-admin');
const jwtUtil = require('./utils/jwtUtil')
const serviceAccount = require('./serviceAccount.json');
const keygen = require('keygen');

const { getTokensFromObject } = require("next-firebase-auth-edge/lib/next/tokens");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const port = 8080;

app.use(express.json());

// Sign up a user endpoint
app.post('/signup', async (req, res) => {
  try {
    // const { token } = req.headers.authorization;
    // const decodedToken = jwtUtil.verifyToken(token);
    // const user_email = decodedToken.email;
    // const user_password = decodedToken.password;

    const {user_email, user_password, first_name, last_name, address, initial_deposit} = req.body;
    const timestamp = Date.now();
    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      user_email,
      user_password,
    });

    // Create user profile in Firestore
    const userRef = admin.firestore().collection('users').doc(userRecord.uid);
    await userRef.set({
      // Add any additional user data here: account, transactions etc.
      first_name,
      last_name,
      address
    });

    await userRef.collection('history').add({
      timestamp : timestamp,
      message : "User created"
    });

    console.log(userRecord.uid);
    var account_id = await userRef.collection('accounts').add({
      account_type : "primary",
      balance : initial_deposit,
      public_account_id : keygen.hex(keygen.medium),
    });

    await userRef.collection('transactions').add({
      deposit : true,
      amount : initial_deposit,
      account_id : account_id.id,
      timestamp : timestamp,
    });
    

    res.status(201).json({
      message: 'User created successfully',
      uid: userRecord.uid,
      deposited_amount: initial_deposit,
      creation_timestamp: timestamp
    });

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating account' });
  }
});



app.post('/signin', async (req, res) => {
  try 
  {
    // const { token } = req.headers.authorization;
    // const decodedToken = jwtUtil.verifyToken(token);
    // const user_email = decodedToken.email;
    // const user_password = decodedToken.password;
    const { user_email, user_password } = req.body;

    // auth user 
    // TO DO: Rithviks AUTH function 

    

    // get user info from firestore
    const userDoc = await firestore.collection('Users').doc(userCredential.user.uid).get();
    const userData = userDoc.data();
    // account info from accounts subcollection
    const accountDoc = await firestore.collection(`Users/${userCredential.user.uid}/accounts`).doc().get();
    const accountData = accountDoc.data();

    const transactionDoc = await firestore.collection(`Users/${userCredential.user.uid}/transactions`).doc().get();
    const transactionData = transactionDoc.data();


    const payload = {
      userData,
      accountData,
      transactionData
    }
    console.log(payload)
    const jwtTokenUserInfo = jwtUtil.generateToken(payload);
    console.log(jwtUtil.verifyToken(jwtTokenUserInfo));
    res.status(201).json({ message: 'User logged in successfully', user_info: payload });

  }
  catch (err)
  {
    console.error('Error signing in user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// Create a function to add new transactions
app.post('/addTransaction', async (req, res) => {
  try {
    const { userUid, amount, deposit } = req.body;

    // Get user reference
    const userRef = admin.firestore().collection('users').doc(userUid);

    // Get user's primary account
    const querySnapshot = await userRef.collection('accounts').where('account_type', '==', 'primary').get();
    if (querySnapshot.empty) {
      return res.status(404).json({ error: 'Primary account not found for the user' });
    }

    const accountDoc = querySnapshot.docs[0];
    const accountId = accountDoc.id;

    // Add a new transaction
    const timestamp = admin.firestore.FieldValue.serverTimestamp();

    await userRef.collection('transactions').add({
      deposit,
      amount,
      account_id: accountId,
      timestamp,
    });

    // Update the account balance
    const currentBalance = accountDoc.data().balance;
    const newBalance = deposit ? currentBalance + amount : currentBalance - amount;

    await accountDoc.ref.update({
      balance: newBalance,
    });

    res.status(200).json({ success: true, message: 'Transaction added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




// Transactions 

// Deposit only
// async function deposit(uid, amount, account_id)
// {
//   await userRef.collection('transactions').add({
//     deposit : true,
//     amount : amount,
//     account_id : account_id.id,
//     timestamp : timestamp,
//   });
// };