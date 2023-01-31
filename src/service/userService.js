import axios from 'axios'

const userRegister = (data) => {
    return axios.post("http://localhost:8080/api/v1/user/register", { ...data })
}
const userLogin = (data) => {
    return axios.post("http://localhost:8080/api/v1/user/login", { ...data })
}
// nnn

export {
    userRegister, userLogin
}