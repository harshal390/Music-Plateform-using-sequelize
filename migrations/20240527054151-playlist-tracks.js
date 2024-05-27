'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("playlistTracks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      playlistId: Sequelize.INTEGER,
      trackId: Sequelize.INTEGER,
      order: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("playlistTracks", {
      type: "foreign key",
      fields: ["playlistId"],
      name: "fk_playlistTracks_playlists_playlistId",
      references: {
        table: "playlists",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
    await queryInterface.addConstraint("playlistTracks", {
      type: "foreign key",
      fields: ["trackId"],
      name: "fk_playlistTracks_tracks_trackId",
      references: {
        table: "tracks",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("playlistTracks");
  }
};
