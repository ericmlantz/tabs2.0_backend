'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('searches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      searchName: {
        type: Sequelize.STRING
      },
      query: {
        type: Sequelize.TEXT
      },
      interestId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'interests',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('searches');
  }
};