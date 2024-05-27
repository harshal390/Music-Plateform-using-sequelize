'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      track.belongsTo(models.album);
      models.album.hasMany(track);
      track.belongsToMany(models.playlist, { through: models.playlistTrack });
      track.belongsToMany(models.user, { through: models.like });
    }
  }
  track.init({
    albumId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'track',
  });
  return track;
};