import * as actionTypes from "./type";

export const FETCH_DATA_LOGIN = () => {
    return {
        type: actionTypes.FETCH_DATA_LOGIN,
    };
};
export const FETCH_DATA_SUCCESS = (idAccount, username, token) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        username: username,
        idAccount: idAccount,
        token: token,
    };
};
export const FETCH_DATA_ERROR = () => {
    return {
        type: actionTypes.FETCH_DATA_ERROR,
    };
};
export const LOGOUT = () => {
    return {
        type: actionTypes.LOGOUT,
    };
};
export const INITIAL_CART_REDUX = (cart) => {
    return {
        type: actionTypes.INITIAL_CART_REDUX,
        cart: cart
    }
}
export const INCREASE = (idProduct) => {
    return {
        type: actionTypes.INCREASE,
        idProduct: idProduct
    }
}
export const DECREASE = (idProduct) => {
    return {
        type: actionTypes.DECREASE,
        idProduct: idProduct
    }
}
