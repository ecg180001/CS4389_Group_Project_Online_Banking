module.exports = function(app, admin)
{

    // Function to add new transactions
    app.post('/addDeposit', async (req, res) =>
    {
        try
        {
            const { userUid, amount, deposit } = req.body;
        
            // Get user reference
            const userRef = admin.firestore().collection('users').doc(userUid);
        
            // Get user's primary account
            const querySnapshot = await userRef.collection('accounts').where('account_type', '==', 'primary').get();
            if (querySnapshot.empty)
            {
                return res.status(404).json({ error: 'Primary account not found for the user' });
            }
        
            const accountDoc = querySnapshot.docs[0];
            const accountId = accountDoc.id;
        
            // Add a new transaction
            const timestamp = admin.firestore.FieldValue.serverTimestamp();

            // If not deposit, check current balance
            const currentBalance = accountDoc.data().balance;
            if ((!deposit) && (amount > currentBalance))
            {
                return res.status(400).json({ error: 'Requested withdrawal amount greater than account balance' });
            }
        
            await userRef.collection('transactions').add({
                deposit,
                amount,
                account_id: accountId,
                timestamp,
            });
        
            // Update the account balance
            const newBalance = deposit ? currentBalance + amount : currentBalance - amount;
        
            await accountDoc.ref.update({
                balance: newBalance,
            });
        
            res.status(200).json({ success: true, message: 'Transaction added successfully' });
        }
        catch (error)
        {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    
    // Function to get transactions for a user based on an account ID
    app.post('/getTransactions', async (req, res) =>
    {
        try {
        const { userUid, accountId } = req.body;
    
        // Get user reference
        const userRef = admin.firestore().collection('users').doc(userUid);
    
        // Check if the user exists
        const userDoc = await userRef.get();
        if (!userDoc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }
    
        // Check if the account exists
        const accountDoc = await userRef.collection('accounts').doc(accountId).get();
        if (!accountDoc.exists)
        {
            return res.status(404).json({ error: 'Account not found for the user' });
        }
    
        // Get transactions for the specified account
        const transactions = [];
        const querySnapshot = await userRef.collection('transactions').where('account_id', '==', accountId).get();
        
        querySnapshot.forEach((doc) => {
            transactions.push({
            id: doc.id,
            ...doc.data(),
            });
        });
    
        res.status(200).json({ transactions });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Raise disputes
    app.post('/raiseDispute', async (req, res) =>
    {
        try {
            const { transactionId } = req.body;
        
            // Get transaction reference
            const transRef = admin.firestore().collection('transactions').doc(transactionId);
        
            // Check if the transaction exists
            const transDoc = await transRef.get();
            if (!transDoc.exists) {
                return res.status(404).json({ error: 'Transaction not found' });
            }

            await transRef.update({"disputed": true});
        
            res.status(200).json({ transactionId });
            } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
            }


    });



}