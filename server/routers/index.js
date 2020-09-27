const express = require('express')
const router = express.Router()
const routerTodo = require('./routerTodo')

router.use('/todo', routerTodo)

module.exports = router