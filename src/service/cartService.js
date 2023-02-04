import axios from "axios"

const fetchCart = (idAccount) => {
    return axios.post("http://localhost:8080/api/v1/cart/read", idAccount)
}
const fetchAllCart = (idAccount) => {
    return axios.get("http://localhost:8080/api/v1/cart-all/read")
}
const updateCart = (data) => {
    return axios.put("http://localhost:8080/api/v1/update-cart-qty", { ...data })
}
const deleteCart = (item) => {
    return axios.delete("http://localhost:8080/api/v1/delete-cart", { data: { id: item.Products.id } })
}
const addToCart = (item) => {
    return axios.post("http://localhost:8080/api/v1/cart/add", { ...item })
}

export {
    fetchCart, updateCart, deleteCart, fetchAllCart, addToCart
}