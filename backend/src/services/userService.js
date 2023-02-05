import db from "../models";
const { Op } = require("sequelize");

const userRegister = async (data) => {
    try {
        // let isEmailExist = await loginRegisterService.checkEmailExist(data.email);
        // if (isEmailExist === true) {
        //     return {
        //         EM: "The email is already exist",
        //         EC: 0,
        //         DT: 'email'
        //     };
        // }
        // check phone number
        // let isPhoneExist = await loginRegisterService.checkPhoneExist(data.phone);
        // if (isPhoneExist === true) {
        //     return {
        //         EM: "The phone number is already exist",
        //         EC: 0,
        //         DT: 'phone'
        //     };
        // }
        // hash password:
        // const hashPassword = bcrypt.hashSync(data.password, salt);


        //console.log('data new user: ', data)
        await db.User.create({ username: data.username, email: data.email, phone: data.phone, password: data.password }) //, password: hashPassword
        return {
            EM: 'Create new user ok',
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

const userCheckout = async (data) => {
    try {

        let cart = await db.Cart.findOne({
            where: { userId: data.idAccount }
        })
        await cart.update({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            totalMoney: data.totalMoney,
            address: data.address,
            commune: data.commune,
            district: data.district,
            city: data.city,
            codeCart: data.codeCart
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

const userLogin = async (data) => {
    try {

        //await db.User.create({ username: data.username, email: data.email, phone: data.phone, password: data.password }) //, password: hashPassword
        const user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { username: data.username },
                    { email: data.username }
                ]
            }
        });
        if (user && user.password == data.password) {
            return {
                EM: 'Login success',
                EC: 1,
                DT: user.id
            }
        }
        else {
            return {
                EM: 'Invalid password or user name',
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
    userRegister, userLogin, userCheckout
}