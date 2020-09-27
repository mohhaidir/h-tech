const {
    Todo
} = require("../models");

class ControllerUser {
    static postTodo(req, res) {
        Todo.create(req.body)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }

    static getTodos(req, res) {
        Todo.findAll()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }

    static getTodo(req, res) {
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
                res.status(500).json(err);
            })
    }

    static putTodo(req, res) {
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
                res.status(500).json(err);
            })
    }

    static deleteTodo(req, res) {
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
                res.status(500).json(err);
            })
    }
}

module.exports = ControllerUser;