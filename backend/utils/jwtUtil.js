const jwt = require('jsonwebtoken');

const secretKey = 'cs4389'; // Replace with your own secret key

// Function to generate a JWT token
function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Adjust the expiration time as needed
}

// Function to verify and decrypt a JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { success: true, decoded };
  } catch (error) {
    return { success: false, error: 'Invalid token' };
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
