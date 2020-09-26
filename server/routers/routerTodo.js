const express = require('express')
const router = express.Router()
const ControllerTodo = require('../controllers/controllerTodo')

const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router
    .post('/', authentication, ControllerTodo.postTodo)
    .get('/', authentication, ControllerTodo.getTodos)
    .get('/:id', authentication, authorization, ControllerTodo.getTodo)
    .put('/:id', authentication, authorization, ControllerTodo.putTodo)
    .delete('/:id', authentication, authorization, ControllerTodo.deleteTodo)

module.exports = router