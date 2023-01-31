import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { fetchCart, updateCart } from "../service/cartService"
import _ from 'lodash'
import { useDispatch, useSelector } from "react-redux"

import './Cart.scss'
import { INITIAL_CART_REDUX, INCREASE, DECREASE } from "../redux/actions/action"

const Cart = () => {
    const navigate = useNavigate()
    const { search } = useLocation();
    const dispatch = useDispatch()


    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";
    const [arrCart, setArrCart] = useState([])
    const [total, setTotal] = useState(0)
    const [shipping, setShipping] = useState(0)

    let cart = useSelector((state) => state.user.cart)

    var a = []
    var tt = 0
    //console.log('arr cart: ', arrCart)
    // var a = _.cloneDeep(arrCart)
    // var tt = _.cloneDeep(total)

    let username = sessionStorage.getItem("username")

    let idAccount = sessionStorage.getItem("idAccount")
    console.log('id account: ', idAccount)
    useEffect(() => {

        //console.log('id account: ', idAccount)
        // if () {

        // }
        if (!username) {
            navigate("/login?redirect=/cart")
        }
        fetchCartF()
        console.log('cart qty: ', cart.qty)

    }, [cart.qty])

    const fetchCartF = async () => {

        let resCart = await fetchCart({ idAccount })
        console.log('res: ', resCart.data.DT)
        tt = 0
        a = []
        resCart.data.DT.map((item, index) => {
            if (item.Products.name != null && item.User.id != null) {
                a.push(item)
                tt = tt + item.Products.price * item.qty
            }
        })
        console.log('a: ', a)
        dispatch(INITIAL_CART_REDUX(a))
        //setArrCart(a)
        setTotal(tt)
    }
    const handleCartUp = (cartProduct) => {
        console.log('cart product: ', cartProduct)
        arrCart.map((item, index) => {
            if (item.Products.id === cartProduct.Products.id) {
                item.qty = item.qty + 1

            }
            setArrCart(arrCart)
        })
        //setArrCart([...arrCart, { ...item, qty: item.qty + 1 }])
    }
    return (
        // <!--================Cart Area =================-->
        <section class="cart_area">
            <div class="container">
                <div class="cart_inner">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    cart.map((item, index) => (

                                        <tr key={`key ${index}`}>
                                            <td>
                                                <div class="media d-flex">
                                                    <div class="d-flex">

                                                        <img src={item.Products.image} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <p>{item.Products.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>${item.Products.price}</h5>
                                            </td>
                                            <td>
                                                <div class="product_count">
                                                    <input type="text" name="qty" id="sst" maxlength="12" value={item.qty} title="Quantity:"
                                                        class="input-text qty" />
                                                    <button
                                                        class="increase items-count" type="button">
                                                        <i class="lnr lnr-chevron-up fa-solid fa-chevron-up"
                                                            onClick={async () => {

                                                                //handleCartUp(item)
                                                                dispatch(INCREASE(item.id))
                                                                // bi chậm 1 nhịp
                                                                await updateCart({ ...item, type: 'plus' })
                                                            }


                                                            }></i>
                                                    </button>
                                                    <button
                                                        class="reduced items-count" type="button">
                                                        <i
                                                            class="lnr lnr-chevron-down fa-solid fa-chevron-down"
                                                            onClick={async () => {

                                                                //handleCartUp(item)
                                                                dispatch(DECREASE(item.id))
                                                                // số lượng sản phẩm trong giỏ lớn hơn 1 mới cho giảm
                                                                if (item.qty > 1) {
                                                                    await updateCart({ ...item, type: 'minus' })
                                                                }
                                                            }}>

                                                        </i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>

                                                <h5>${item.qty * item.Products.price}</h5>
                                            </td>
                                        </tr>
                                    ))}

                                <tr class="bottom_button">
                                    <td>
                                        <a class="gray_btn" href="#">Update Cart</a>
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <div class="cupon_text d-flex align-items-center">
                                            <input type="text" placeholder="Coupon Code" />
                                            <a class="primary-btn" href="#">Apply</a>
                                            <a class="gray_btn" href="#">Close Coupon</a>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="shipping_area">
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Shipping</h5>
                                    </td>
                                    <td>
                                        <div class="shipping_box">
                                            <ul class="list">
                                                <li className="d-flex"> Flat Rate: $5.00<input className="radio" type="radio" value={5} name="radAnswer" onChange={(e => setShipping(e.target.value))} /></li>
                                                <li className="d-flex">Free Shipping<input className="radio" type="radio" value={0} name="radAnswer" onChange={(e => setShipping(e.target.value))} /></li>
                                                <li className="d-flex">Flat Rate: $10.00<input className="radio" type="radio" value={10} name="radAnswer" onChange={(e => setShipping(e.target.value))} /></li>
                                                <li className="d-flex active" >Local Delivery: $2.00<input className="radio" type="radio" value={2} name="radAnswer" onChange={(e => setShipping(e.target.value))} /></li>
                                            </ul>
                                            <h6>Calculate Shipping <i class="fa fa-caret-down" aria-hidden="true"></i></h6>
                                            <select class="shipping_select">
                                                <option value="1">Bangladesh</option>
                                                <option value="2">India</option>
                                                <option value="4">Pakistan</option>
                                            </select>
                                            <select class="shipping_select">
                                                <option value="1">Select a State</option>
                                                <option value="2">Select a State</option>
                                                <option value="4">Select a State</option>
                                            </select>
                                            <input type="text" placeholder="Postcode/Zipcode" />
                                            <a class="gray_btn" href="#">Update Details</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5 className="total">$ {total + shipping}</h5>
                                    </td>
                                </tr>
                                <tr class="out_button_area">
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <div class="checkout_btn_inner d-flex align-items-center">
                                            <a class="gray_btn" href="#">Continue Shopping</a>
                                            <a class="primary-btn" href="#">Proceed to checkout</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        // {/* <!--================End Cart Area =================--> */}
    )
}
export default Cart