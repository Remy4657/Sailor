import db from "../models/index";
import { useSelector } from 'react-redux'
const { Op } = require("sequelize");

const getAllCart = async (idAccount) => {

    try {
        // let idCart = await db.Cart.id
        // let idCartD = await db.Cart_Detail.cartId
        // let idProductD = await db.Cart_Detail.productId
        // let idProduct = await db.Product.id
        // console.log('id cart: ', idCart)
        // console.log('id cart in cart_detail: ', idCartD)
        // console.log('id product: ', idProduct)
        // console.log('id product in cart_detail: ', idProductD)

        // let cart1 = await db.Cart.findAll({
        // where: {
        //     [Op.and]: [
        //         { db.Cart.id: 12 },
        //         { status: 'active' }
        //     ]
        // },
        //     // lấy các thuộc tính cần thiết

        //     attributes: ["id", "userId"],
        //     include: { model: db.Cart_Detail, attributes: ["productId", "name", "description"] },
        //     raw: true,
        //     //nest: true
        // });

        let cart = await db.Cart.findAll({

            where: {
                userId: idAccount
            },

            attributes: ["id", "userId", "qty"],
            include: [
                { model: db.Product, attributes: ["id", "name", "description", "price", "image"] },
                { model: db.User, attributes: ["id", "email"] }
            ],

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
        let cartDetail = await db.Cart.findOne({
            where: { id: data.id }
        })
        if (cartDetail && data.type === 'plus') {
            await cartDetail.update({
                qty: data.qty + 1
            })
            return {
                EM: 'Update plus cart detail succeed',
                EC: 1,
                DT: []
            }
        }
        else if (cartDetail && data.type === 'minus') {
            await cartDetail.update({
                qty: data.qty - 1
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
module.exports = {
    getAllCart, updateCart
}