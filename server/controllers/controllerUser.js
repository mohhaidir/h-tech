require('dotenv').config()
const {
    User
} = require('../models')

const generateToken = require('../helpers/generateToken')
const comparePassword = require('../helpers/comparePassword')

class ControllerUser {

    static register(req, res, next) {
        const UserData = req.body
        User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(result => {
                if (result) {
                    res.status(400).json({
                        msg: "Email already taken!"
                    })
                } else {
                    return User.create(UserData)
                }
            })
            .then(data => {
                let token = generateToken(data)
                res.status(200).json({
                    token,
                    name: data.email
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        const {
            email,
            password
        } = req.body
        let userFound = null
        User.findOne({
                where: {
                    email
                }
            })
            .then(user => {
                if (user) {
                    userFound = user
                    return comparePassword(password, user.password)
                } else {
                    throw {
                        status: 404,
                        msg: 'Email not found!'
                    }
                }
            })
            .then(result => {
                if (result) {
                    let token = generateToken(userFound)
                    res.status(200).json({
                        token,
                        name: userFound.firstName
                    })
                } else {
                    throw {
                        status: 400,
                        msg: 'Wrong password!'
                    }
                }
            })
            .catch(err => {
                console.log('masuk sini')
                next({
                    status: 500,
                    msg: 'Internal Server Error!'
                })
            })
    }
}

module.exports = ControllerUser