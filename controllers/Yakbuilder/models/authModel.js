// models/authModel.js
const jwt = require('jsonwebtoken');

const AuthModel = {
  generateToken: (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '7d',
    });
  },

  verifyToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || 'secret');
    } catch (error) {
      return null;
    }
  },
};

module.exports = AuthModel;
