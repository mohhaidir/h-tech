const {
    Todo
} = require("../models");

class ControllerUser {
    static postTodo(req, res) {
        const data = req.body
        data.userId = req.dataUser.id
        Todo.create(data)
            .then(result => {
                res.status(201).json({
                    result
                })
            })
            .catch(err => {
                if (err.errors) {
                    res.status(400).json({
                        errors: err.errors
                    })
                } else {
                    res.status(500).json({
                        errors: err
                    })
                }
            })
    }

    static getTodos(req, res) {
        const userId = Number(req.dataUser.id)
        Todo.findAll({
                where: {
                    userId: userId
                }
            })
            .then(result => {
                res.status(200).json({
                    result: result
                })
            })
            .catch(err => {
                if (err.errors) {
                    res.status(400).json({
                        errors: err.errors
                    })
                } else {
                    res.status(500).json({
                        errors: err
                    })
                }
            })
    }

    static getTodo(req, res, next) {
        const id = Number(req.params.id)
        Todo.findOne({
                where: {
                    id: id
                }
            })
            .then(result => {
                res.status(200).json({
                    result
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static putTodo(req, res, next) {
        const id = Number(req.params.id)
        const data = req.body

        Todo.update(data, {
                where: {
                    id: id
                }
            })
            .then(result => {
                res.status(200).json({
                    result: data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteTodo(req, res, next) {
        const id = Number(req.params.id)
        let deletedData = null
        Todo.findByPk(id)
            .then(data => {
                deletedData = data
                return Todo.destroy({
                    where: {
                        id: id
                    }
                })
            })
            .then(result => {
                res.status(200).json({
                    msg: `Successfully delete todo: ${deletedData.title}!`
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerUser;