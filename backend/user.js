module.exports = function(app, admin)
{
    const jwtUtil = require('./utils/jwtUtil')

    const keygen = require('keygen');

    // Sign up a user endpoint
    app.post('/signup', async (req, res) =>
    {
        try
        {
            // const { token } = req.headers.authorization;
            // const decodedToken = jwtUtil.verifyToken(token);
            // const user_email = decodedToken.email;
            // const user_password = decodedToken.password;
        
            const {user_email, user_password, first_name, last_name, address, initial_deposit} = req.body;
            const timestamp = Date.now();
            // Create user in Firebase Authentication
            const userRecord = await admin.auth().createUser({
                email: user_email,
                password: user_password
            });
            console.log(userRecord)
        
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
        
        }
        catch (error)
        {
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
        const { uid } = req.body;
    
        // auth user 
        // TO DO: Rithviks AUTH function 
    
        
    
        // get user info from firestore
        console.log(uid)
        const userRef = await admin.firestore().collection('users').doc(uid);
        const userDoc = await userRef.get();
        const userData = userDoc.data();
        console.log(userData);
        
        // Retrieve account info from the accounts subcollection
        const accountsData = [];
        const accountsCollection = await userRef.collection('accounts').get();
        accountsCollection.forEach((accountDoc) => {
          accountsData.push(accountDoc.data());
        });
        
        console.log(accountsData);
        
        // Retrieve transaction info from the transactions subcollection
        const transactionsData = [];
        const transactionsCollection = await userRef.collection('transactions').get();
        transactionsCollection.forEach((transactionDoc) => {
          transactionsData.push(transactionDoc.data());
        });

        // Retrieve transaction info from the transactions subcollection
        const historyData = [];
        const historyCollection = await userRef.collection('history').get();
        historyCollection.forEach((transactionDoc) => {
            historyData.push(transactionDoc.data());
        });
        
        console.log(historyData);

    
    
        const payload = {
            userData,
            accountsData,
            transactionsData,
            historyData
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
    
}
