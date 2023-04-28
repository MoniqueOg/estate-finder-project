// User authentication and authorization
// File name: auth.js
// Functionality: This file will contain functions to 
// handle user authentication and authorization 
// using JSON Web Tokens (JWT). Functions such as createToken and verifyToken 
// will be included to generate and verify JWTs.

function createToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400 // expires in 24 hours
    });
}


function verifyToken() {
    return expressJwt({ secret: config.jwtSecret });
}
