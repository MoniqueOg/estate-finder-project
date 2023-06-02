const jwt = require("jsonwebtoken");

const secret = "mysecretkey"; // change this to a secure secret in production

// Function to generate a JWT for a given user ID
function createToken(userId) {
  const payload = { userId };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}

// Function to verify and decode a JWT
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded.userId;
  } catch (err) {
    return null; // return null if the token is invalid or has expired
  }
}

module.exports = {
  createToken,
  verifyToken,
};


// function createToken(user) {
//     return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
//         expiresIn: 86400
//          // expires in 24 hours
//     });
// }


// function verifyToken() {
//     return expressJwt({ secret: config.jwtSecret });
// }
