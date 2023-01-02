'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Videos', {
            id: {
              allowNull: false,
              primaryKey: true,
              type: Sequelize.STRING
            },
            fileVideo: {
              type: Sequelize.STRING
            },
            link: {
              type: Sequelize.TEXT('long')
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
        await queryInterface.dropTable('Videos');
    }
};