'use strict';
const {
  Model
} = require('sequelize');
const md5 = require("md5");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.artist, { through: models.follower });
      user.belongsToMany(models.track, { through: models.like });
    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNo: DataTypes.STRING,
    salt: DataTypes.STRING,
    token: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
    hooks: {
      beforeCreate: async (user, options) => {
        user.salt = await bcrypt.genSalt(5);
        user.token = new Date().getTime().toString();
        user.password = md5(user.password);
        user.createdAt = new Date();
      },
      beforeUpdate: async (user, options) => {
        user.password = md5(user.password);
        user.updatedAt = new Date();
      },
      beforeBulkCreate: async (users, options) => {
        for (const user of users) {
          user.salt = await bcrypt.genSalt(5);
          user.token = new Date().getTime().toString();
          user.password = md5(user.password);
          user.createdAt = new Date();
        }
      }
    }
  });
  return user;
};