import express from "express";
import productController from '../controller/productController'
import userController from '../controller/userController'
import cartController from '../controller/cartController'

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

    return app.use("/api/v1", router);
};
export default initApiRoutes;
