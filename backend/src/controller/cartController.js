import cartService from '../services/cartService'

const readFunc = async (req, res) => {
    try {

        //console.log('id account controller: ', req.body.idAccount)
        let data = await cartService.getAllCart(req.body.idAccount)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });

    } catch (e) {
        console.log(e)
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
}
const updateCartFunc = async (req, res) => {
    try {

        console.log('req detail', req.body)
        let data = await cartService.updateCart(req.body)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });

    } catch (e) {
        console.log(e)
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
}

module.exports = {
    readFunc, updateCartFunc
}