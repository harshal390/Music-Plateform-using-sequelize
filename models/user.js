'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.artist, { through: models.followers });
      user.belongsToMany(models.track, { through: models.like });
    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNo: DataTypes.STRING,
    salt: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};