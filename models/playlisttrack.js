'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playlistTrack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.playlist);
      this.belongsTo(models.track);
    }
  }
  playlistTrack.init({
    playlistId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER,
    order: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'playlistTrack',
  });
  return playlistTrack;
};