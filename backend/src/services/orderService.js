import db from "../models/index";
import { useSelector } from 'react-redux'
const { Op } = require("sequelize");
import { sequelize } from '../config/connectDB'

const getOrderAll = async () => {

    try {


        let order = await db.Cart.findAll({


            // attributes: ["id", "userId"],
            include: [
                {
                    model: db.User, attributes: ["phone", "email"]
                },
                { model: db.Product, attributes: ["id", "name", "description", "price", "image"] }

            ],

            raw: true,
            nest: true
        });
        //console.log('get cart by id: ', cart)
        if (order) {
            // console.log('check user', cart)
            return {
                EM: 'get order success',
                EC: 0,
                DT: order
            }
        }
        else {
            console.log('not get order')
            return {
                EM: 'get order error',
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
const getOrder = async (idAccount) => {

    try {


        let order = await db.Cart.findAll({

            where: {
                userId: +idAccount
            },

            // attributes: ["id", "userId"],
            include: [
                // {
                //     model: db.User, attributes: ["id", "email"]
                // },
                { model: db.Product, attributes: ["id", "name", "description", "price", "image"] },
                { model: db.Shipping, attributes: ["id", "value", "method"] }
            ],

            raw: true,
            nest: true
        });
        //console.log('get cart by id: ', cart)
        if (order) {
            // console.log('check user', cart)
            return {
                EM: 'get order success',
                EC: 0,
                DT: order
            }
        }
        else {
            console.log('not get order')
            return {
                EM: 'get order error',
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

const getOrderConfirm = async (idAccount) => {

    try {


        let order = await db.Cart.findAll({

            where: {
                userId: +idAccount
            },

            // attributes: ["id", "userId"],
            // include: [
            //     // {
            //     //     model: db.User, attributes: ["id", "email"]
            //     // },
            //     { model: db.Product, attributes: ["id", "name", "description", "price", "image"] },
            //     { model: db.Shipping, attributes: ["id", "value", "method"] }
            // ],

            raw: true,
            nest: true
        });
        //console.log('get cart by id: ', cart)
        if (order) {
            // console.log('check user', cart)
            return {
                EM: 'get order success',
                EC: 0,
                DT: order
            }
        }
        else {
            console.log('not get order')
            return {
                EM: 'get order error',
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
module.exports = {
    getOrder, getOrderAll, getOrderConfirm
}