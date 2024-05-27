'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      artist.belongsToMany(models.user, { through: models.follower });
    }
  }
  artist.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artist',
    hook:{
      beforeCreate: async (artist, options) => {
        artist.createdAt = new Date();
        artist.updatedAt = new Date();
      },
      beforeUpdate: async (artist, options) => {
        artist.updatedAt = new Date();
      },
    }
  });
  return artist;
};