import orderService from '../services/orderService'

const readFunc = async (req, res) => {
    try {

        console.log('id account order controller: ', req.body)
        let data = await orderService.getOrder(req.body.idAccount)

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
const readOrderConfirmFunc = async (req, res) => {
    try {

        console.log('id account order controller: ', req.body)
        let data = await orderService.getOrderConfirm(req.body.idAccount)

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
    readFunc, readOrderConfirmFunc
}