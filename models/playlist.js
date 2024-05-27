'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      playlist.belongsTo(models.user);
      models.user.hasMany(playlist);
      playlist.belongsToMany(models.track, { through: models.playlistTrack });
    }
  }
  playlist.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'playlist',
  });
  return playlist;
};