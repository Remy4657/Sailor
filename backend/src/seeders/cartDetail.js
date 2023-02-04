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
        await queryInterface.bulkInsert('Cart_Detail',
            [
                {
                    productId: 1,
                    cartId: 1,
                    qty: 1

                },
                {
                    productId: 2,
                    cartId: 2,
                    qty: 3

                },
                {
                    productId: 3,
                    cartId: 1,
                    qty: 2

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
