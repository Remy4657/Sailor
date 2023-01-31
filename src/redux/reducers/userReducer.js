import * as actionTypes from "../actions/type";

const INITIAL_STATE = {
    account: {
        username: "",
        idAccount: "",
        auth: false,
        token: "",
    },
    cart: [],
    isLoading: false,
    isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_LOGIN:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                account: {
                    idAccount: action.idAccount,
                    username: action.username,
                    auth: true,
                    token: action.token,
                },
                isLoading: false,
                isError: false,
            };
        case actionTypes.FETCH_DATA_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            };
        case actionTypes.LOGOUT:
            localStorage.removeItem("token");
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("account");

            return {
                ...state,
                account: {
                    auth: false,
                    token: "",
                    email: "",
                },
            };

        case actionTypes.INITIAL_CART_REDUX:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id);
            return {
                ...state,
                cart: [...action.cart]

            };
        case actionTypes.INCREASE:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id)
            return {
                ...state,
                cart: state.cart.map((x) =>
                    x.id === action.idProduct ? { ...x, qty: x.qty + 1 } : x
                ),
            };
        case actionTypes.DECREASE:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id)
            return {
                ...state,
                cart: state.cart.map((x) =>
                    x.id === action.idProduct && x.qty > 1 ? { ...x, qty: x.qty - 1 } : x
                ),
            };
        default:
            return state;
    }
};

export default userReducer;
