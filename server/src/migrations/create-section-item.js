'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SectionItems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      video_id: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Videos'
          },
          key: 'id'
        }
      },
      section_id: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Sections'
          },
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
    await queryInterface.dropTable('SectionItems');
  }
};