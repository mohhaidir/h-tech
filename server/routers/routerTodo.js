const express = require('express')
const router = express.Router()
const ControllerTodo = require('../controllers/controllerTodo')

router
    .post('/', ControllerTodo.postTodo)
    .get('/', ControllerTodo.getTodos)
    .get('/:id', ControllerTodo.getTodo)
    .put('/:id', ControllerTodo.putTodo)
    .delete('/:id', ControllerTodo.deleteTodo)

module.exports = router