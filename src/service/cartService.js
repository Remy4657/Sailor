import axios from "axios"

const fetchCart = (idAccount) => {
    return axios.post("http://localhost:8080/api/v1/cart/read", idAccount)
}
const updateCart = (data) => {
    return axios.put("http://localhost:8080/api/v1/update-cart-qty", { ...data })
}

export {
    fetchCart, updateCart
}//