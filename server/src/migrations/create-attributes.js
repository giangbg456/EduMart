'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Attributes', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            level: {
                type: Sequelize.STRING
            },
            slogan: {
              type: Sequelize.TEXT
            },
            require: {
              type: Sequelize.TEXT('long')
            },
            description: {
              type: Sequelize.TEXT('long')
            },
            except: {
              type: Sequelize.TEXT('long')
            },
            tag: {
              type: Sequelize.TEXT
            },
            price: {
              type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Attributes');
    }
};