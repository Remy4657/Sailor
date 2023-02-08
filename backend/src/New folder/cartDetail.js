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
                // {
                //     ProductId: 1,
                //     CartId: 1,
                //     qty: 1

                // },
                // {
                //     ProductId: 2,
                //     CartId: 2,
                //     qty: 3

                // },
                // {
                //     ProductId: 3,
                //     CartId: 1,
                //     qty: 2

                // }
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
