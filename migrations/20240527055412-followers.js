'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("followers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: Sequelize.INTEGER,
      artistId: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("followers", {
      type: "foreign key",
      fields: ["userId"],
      name: "fk_followers_users_userId",
      references: {
        table: "users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
    await queryInterface.addConstraint("followers", {
      type: "foreign key",
      fields: ["artistId"],
      name: "fk_followers_artists_artistId",
      references: {
        table: "artists",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('followers');
  }
};
