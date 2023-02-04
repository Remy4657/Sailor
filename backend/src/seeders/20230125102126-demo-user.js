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
    await queryInterface.bulkInsert('Product',
      [
        {

          name: 'SAN PHAM 1',
          price: 100000,
          priceOld: 200000,
          status: "Còn hàng",
          image: "https://evara.vn/uploads/plugin/product_items/384/icon.jpg",
          description: "Dep"
        },
        {

          name: 'SAN PHAM 2',
          price: 100000,
          priceOld: 200000,
          status: "Còn hàng",
          image: "https://evara.vn/uploads/plugin/product_items/384/icon.jpg",
          description: "Nho gon"
        },

        {

          name: 'SAN PHAM 3',
          price: 100000,
          priceOld: 200000,
          status: "Còn hàng",
          image: "https://evara.vn/uploads/plugin/product_items/384/icon.jpg",
          description: "Dep"
        },
        {

          name: 'SAN PHAM 4',
          price: 100000,
          priceOld: 200000,
          description: "Dep",
          status: "Còn hàng",
          image: "https://evara.vn/uploads/plugin/product_items/384/icon.jpg"
        },
        {

          name: 'SAN PHAM 5',
          price: 100000,
          priceOld: 200000,
          status: "Còn hàng",
          image: "https://evara.vn/uploads/plugin/product_items/384/icon.jpg",
          description: "Dep"
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
