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
      noteName: {
        type: Sequelize.STRING
      },
      noteBody: {
        type: Sequelize.TEXT
      },
      noteUrl: {
        type: Sequelize.TEXT
      },
      pageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pages',
          key: 'id'
        }
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