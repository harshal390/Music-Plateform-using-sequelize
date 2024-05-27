'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: Sequelize.INTEGER,
      trackId: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("likes", {
      type: "foreign key",
      fields: ["userId"],
      name: "fk_likes_users_userId",
      references: {
        table: "users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
    await queryInterface.addConstraint("likes", {
      type: "foreign key",
      fields: ["trackId"],
      name: "fk_likes_tracks_trackId",
      references: {
        table: "tracks",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('likes');
  }
};
