// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // You can choose any available port

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
