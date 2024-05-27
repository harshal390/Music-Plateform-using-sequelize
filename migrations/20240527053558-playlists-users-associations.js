'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'playlists',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );
    await queryInterface.addConstraint("playlists", {
      type: "foreign key",
      fields: ["userId"],
      name: "fk_playlists_users_userId",
      references: {
        table: "users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("playlists", "fk_playlists_users_userId", {});
    await queryInterface.removeColumn(
      'playlists',
      'userId',
      Sequelize.INTEGER
    );
  }
};
