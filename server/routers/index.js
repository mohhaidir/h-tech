const express = require('express')
const router = express.Router()
const routerTodo = require('./routerTodo')
const routerUser = require('./routerUser')

router.use('/todo', routerTodo)
router.use('/user', routerUser)

module.exports = router