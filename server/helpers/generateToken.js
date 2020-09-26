require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateToken = (data) => {
  const token = jwt.sign({
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email
  }, process.env.JWT_TOKEN)
  return token
}

module.exports = generateToken