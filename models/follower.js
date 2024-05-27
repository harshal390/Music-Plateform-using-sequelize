'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.artist);
    }
  }
  follower.init({
    userId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'follower',
  });
  return follower;
};