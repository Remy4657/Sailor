import express from "express";
import productController from '../controller/productController'
import userController from '../controller/userController'
import cartController from '../controller/cartController'
import orderController from '../controller/orderController'

const router = express.Router();

// app: express app
const initApiRoutes = (app) => {
    // định nghĩa các routes được sử dụng



    // api product
    router.get("/product/read", productController.readFunc)
    router.get("/product/detail/:id", productController.readProductDetailFunc)


    // api user
    router.post("/user/register",
        userController.userRegisterFunc
    )
    router.post("/user/login",
        userController.userLoginFunc
    )
    router.post("/user/checkout",
        userController.userCheckoutFunc
    )

    // cart api
    router.post("/cart/read",
        cartController.readFunc
    )
    router.get("/cart-all/read",
        cartController.readAllFunc
    )
    router.put("/update-cart-qty",
        cartController.updateCartFunc
    )
    router.delete("/delete-cart",
        cartController.deleteCartFunc
    )
    router.post("/cart/add",
        cartController.addToCartFunc
    )
    router.put("/shipping/update",
        cartController.updateShippingFunc
    )
    router.post("/order/read",
        orderController.readFunc
    )
    router.post("/order-confirm/read",
        orderController.readOrderConfirmFunc
    )
    // add user to cart
    router.post("/add-user-to-cart",
        cartController.addUserToCartFunc
    )

    return app.use("/api/v1", router);
};
export default initApiRoutes;
