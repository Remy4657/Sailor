'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        await queryInterface.bulkInsert('User',
            [
                {
                    username: 'dat',
                    cartId: 1,
                    email: 'dat@gmail.com',
                    password: 1234,
                    phone: 1234
                },
                {
                    username: 'test',
                    cartId: 2,
                    email: 'test@gmail.com',
                    password: 1234,
                    phone: 1234
                }
            ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
