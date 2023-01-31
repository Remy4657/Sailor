'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  Order_Detail.init({
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    payment: DataTypes.INTEGER,
    address: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    codeCart: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order_Detail',
  });
  return Order_Detail;
};