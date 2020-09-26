'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const hashPassword = require('../helpers/bcrypt')
  const Model = sequelize.Sequelize.Model
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Todo, {
        foreignKey: 'userId'
      })
    }
  };

  User.init({
    firstName: {
      type: DataTypes.STRING,
      validation: {
        notEmpty: {
          message: "First Name is required and cannot be empty!"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validation: {
        notEmpty: {
          message: "Last Name is required and cannot be empty!"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validation: {
        notEmpty: {
          message: "Email is required and cannot be empty!"
        },
        isEmail: {
          message: "Invalid email format!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      len: {
        args: [6, 12],
        message: "Password length required between 6 to 12!"
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};