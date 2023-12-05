const express = require('express');
const admin = require('firebase-admin');
const jwtUtil = require('./utils/jwtUtil')
const cors = require('cors');

const serviceAccount = require('./serviceAccount.json');
const keygen = require('keygen');

const { getTokensFromObject } = require("next-firebase-auth-edge/lib/next/tokens");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const app = express();
const port = 8080;
app.use(cors());

app.use(express.json());


// Import routes from other files
require('./transaction')(app, admin);
require('./user')(app, admin);


app.get('/', function(req, res)
{
    return res.status(200).json({"message":`Server is running on http://localhost:${port}`});
});


app.listen(port, () =>
{
    console.log(`Server is running on http://localhost:${port}`);
});


