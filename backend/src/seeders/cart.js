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
        await queryInterface.bulkInsert('Cart',
            [

                {
                    userId: 1,
                    firstname: "dat1",
                    lastname: "trong",
                    email: "dat1@gmail.com",
                    phone: "5456546",
                    totalMoney: 87688,
                    address: 'x81',
                    commune: 'nm',
                    district: 'nl',
                    city: 'hn',
                    codeCart: '7686',

                },
                {
                    userId: 2,
                    firstname: "dat2",
                    lastname: "trong",
                    email: "dat2@gmail.com",
                    phone: "5456546",
                    totalMoney: 87688,
                    address: 'x82',
                    commune: 'nm',
                    district: 'nl',
                    city: 'hn',
                    codeCart: '7686',

                },
                {
                    userId: 1,

                    firstname: "dat3",
                    lastname: "trong",
                    email: "dat3@gmail.com",
                    phone: "5456546",
                    totalMoney: 87688,
                    address: 'x83',
                    commune: 'nm',
                    district: 'nl',
                    city: 'hn',
                    codeCart: '7686',


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
