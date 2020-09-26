const jwt = require('jsonwebtoken')

const authentication = ((req, res, next) => {
  let {
    token
  } = req.headers
  try {
    let decoded = jwt.verify(token, process.env.JWT_TOKEN)
    req.dataUser = decoded
    next()
  } catch (err) {
    const error = {
      status: 401,
      msg: 'Please login first!'
    }
    next(error)
  }
})

module.exports = authentication