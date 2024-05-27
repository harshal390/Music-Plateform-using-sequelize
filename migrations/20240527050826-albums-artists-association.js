'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'albums',
      'artistId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );
    await queryInterface.addConstraint("albums", {
      type: "foreign key",
      fields: ["artistId"],
      name: "fk_albums_artists_artistsId",
      references: {
        table: "artists",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("albums", "fk_albums_artists_artistsId", {});
    await queryInterface.removeColumn(
      'albums',
      'artistId',
      Sequelize.INTEGER
    );
  }
};
