'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'tracks',
      'albumId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );
    await queryInterface.addConstraint("tracks", {
      type: "foreign key",
      fields: ["albumId"],
      name: "fk_tracks_albums_albumId",
      references: {
        table: "albums",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("tracks", "fk_tracks_albums_albumId", {});
    await queryInterface.removeColumn(
      'tracks',
      'albumId',
      Sequelize.INTEGER
    );
  }
};
