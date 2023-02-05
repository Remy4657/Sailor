import db from "../models/index";
import { useSelector } from 'react-redux'
const { Op } = require("sequelize");
import { sequelize } from '../config/connectDB'

const getAllCart = async (idAccount) => {
    try {

        let cart = await db.Cart_Detail.findAll({

            raw: true,
            nest: true
        });
        console.log('cart: ', cart)
        if (cart) {
            // console.log('check user', cart)
            return {
                EM: 'get cart success',
                EC: 0,
                DT: cart
            }
        }
        else {
            console.log('not get user')
            return {
                EM: 'get data succes',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'wrong from server',
            EC: -1,
            DT: []
        }
    }
}
const getCart = async (idAccount) => {

    try {
        let productCart = await db.Cart.findOne({
            where: {
                userId: +idAccount,

            }
        })

        let cart = await db.Cart.findAll({

            where: {
                userId: +idAccount
            },

            attributes: ["id", "userId"],
            include: [
                {
                    model: db.User, attributes: ["id", "email"]
                },
                { model: db.Product, attributes: ["id", "name", "description", "price", "image"] }
            ],

            raw: true,
            nest: true
        });
        console.log('get cart by id: ', cart)
        if (cart) {
            // console.log('check user', cart)
            return {
                EM: 'get cart success',
                EC: 0,
                DT: cart
            }
        }
        else {
            console.log('not get cart')
            return {
                EM: 'get cart error',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'wrong from server',
            EC: -1,
            DT: []
        }
    }
}
const updateCart = async (data) => {
    try {
        // console.log('data cart: ', data)
        if (!data) {
            return {
                EM: 'Not found id product cart',
                EC: 0,
                DT: 'group'
            }
        }
        let cartDetail = await db.Cart_Detail.findOne({
            where: { cartId: data.id, productId: data.Products.id }
        })
        if (cartDetail && data.type === 'plus') {
            await cartDetail.update({
                qty: data.Products.Cart_Detail.qty + 1
            })
            return {
                EM: 'Update plus cart detail succeed',
                EC: 1,
                DT: []
            }
        }
        else if (cartDetail && data.type === 'minus') {
            await cartDetail.update({
                qty: data.Products.Cart_Detail.qty - 1
            })
            return {
                EM: 'Update minus cart detail succeed',
                EC: 1,
                DT: []
            }
        }
        else {
            //not found
            return {
                EM: 'update cart qty invalid',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong from user',
            EC: -1,
            DT: []
        }
    }
}

const deleteCart = async (idProduct) => {
    try {
        //console.log('id product delete: ', id)
        if (!idProduct) {
            return {
                EM: 'Not found id product to delete',
                EC: 0,
                DT: []
            }
        }
        else {
            // await db.Cart.destroy({
            //     where: {
            //         id: id
            //     }
            // })
            await db.Cart_Detail.destroy({
                where: {
                    productId: idProduct
                }
            })
            return {
                EM: 'Delete product success',
                EC: 1,
                DT: []
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong from user',
            EC: -1,
            DT: []
        }
    }
}
const addToCart = async (item) => {
    try {
        if (!item.id) {
            return {
                EM: 'id product not found',
                EC: 0,
                DT: []
            }
        }
        else {
            let productCart = await db.Cart.findOne({
                where: {
                    userId: +item.idAccount,

                }
            })

            let product = await db.Cart_Detail.findOne({
                where: {
                    productId: item.id,
                    cartId: productCart.id
                }
            })// jjjj

            if (product === null) {
                console.log('add new success')
                // await db.Cart.create({ userId: +item.idAccount }) hbhb
                // const DetaiL = sequelize.define('Cart_Detail', {
                //     productId: DataTypes.INTEGER,
                //     cartId: DataTypes.INTEGER,
                //     qty: DataTypes.INTEGER
                // }, { timestamps: false });
                await db.Cart_Detail.build({ productId: item.id, cartId: productCart.id, qty: 1 }).save()

            }
            else {
                await db.Cart_Detail.update(
                    { qty: product.qty + 1 },
                    {
                        where: { productId: item.id, },
                    }
                );
            }
            return {
                EM: 'add product to success',
                EC: 1,
                DT: [product]
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong from user',
            EC: -1,
            DT: []
        }
    }
}
const updateShipping = async (data) => {
    try {

        let shipping = await db.Cart.findOne({
            where: { userId: data.idAccount }
        })
        await shipping.update({
            ShippingId: data.id
        }) //, password: hashPassword
        return {
            EM: 'Update cart ok',
            EC: 1,
            DT: []
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong from user',
            EC: -1,
            DT: []
        }
    }
}
module.exports = {
    getAllCart, getCart, updateCart, deleteCart, addToCart, updateShipping
}