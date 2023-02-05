import { useState, useEffect } from 'react'
import './Checkout.scss'
import { userCheckout } from '../service/userService'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'


import { fetchCart } from "../service/cartService"

const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    var a = []
    var tt = 0
    let idAccount = sessionStorage.getItem("idAccount")
    let username = sessionStorage.getItem("username")

    //console.log('id account: ', idAccount)
    const [dataCheckout, setDataCheckout] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        commune: '',
        district: '',
        city: '',
        codeCart: '',
        idAccount: +idAccount
    })
    useEffect(() => {
        if (!username) {
            navigate("/login?redirect=/cart")
        }
        fetchCartF()
    }, [])


    const fetchCartF = async () => {

        let resCart = await fetchCart({ idAccount })
        console.log('res cart fetch: ', resCart.data.DT)
        tt = 0
        a = []
        if (resCart && resCart.data.DT) {
            // dispatch(INITIAL_CARTALL_REDUX(resCart.data.DT))
            resCart.data.DT.map((item, index) => {
                if (item.Products.name != null && item.User.id != null) {
                    a.push(item)
                    tt = tt + item.Products.price * item.Products.Cart_Detail.qty
                }
            })
        }

        console.log('a: ', a)

        setTotal(tt)
    }
    const handleProceed = async () => {
        let res = await userCheckout(dataCheckout)
        console.log('res post checkout: ', res)
    }
    return (
        <>
            {/* <!-- Start Banner Area --> */}
            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Checkout</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                <a href="single-product.html">Checkout</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Area -->

    <!--================Checkout Area =================--> */}
            <section class="checkout_area section_gap">
                <div class="container">

                    <div class="billing_details">
                        <div class="row">
                            <div class="col-lg-8">
                                <h3>Billing Details</h3>
                                <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                                    <div class="col-md-6 form-group p_star">
                                        <input placeholder='Firstname' type="text" class="form-control" id="first" name="name" onChange={(e) => setDataCheckout({ ...dataCheckout, firstname: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="First name"></span> */}
                                    </div>
                                    <div class="col-md-6 form-group p_star">
                                        <input placeholder='Lastname' type="text" class="form-control" id="last" name="name" onChange={(e) => setDataCheckout({ ...dataCheckout, lastname: e.target.value })} />
                                        {/* <span class="placeholder" ></span> */}
                                    </div>
                                    {/* <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" id="company" name="company" placeholder="Company name" />
                                    </div> */}
                                    <div class="col-md-6 form-group p_star">
                                        <input placeholder='Phone number' type="text" class="form-control" id="number" name="number" onChange={(e) => setDataCheckout({ ...dataCheckout, phone: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="Phone number"></span> */}
                                    </div>
                                    <div class="col-md-6 form-group p_star">
                                        <input placeholder='Email' type="text" class="form-control" id="email" name="compemailany" onChange={(e) => setDataCheckout({ ...dataCheckout, email: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="Email Address"></span> */}
                                    </div>

                                    <div class="col-md-12 form-group p_star">
                                        <input placeholder='Address' type="text" class="form-control" id="nha" name="nha" onChange={(e) => setDataCheckout({ ...dataCheckout, address: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="Số nhà/đường"></span> */}
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <input placeholder='Commune' type="text" class="form-control" id="xa" name="xa" onChange={(e) => setDataCheckout({ ...dataCheckout, commune: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="Xã/phường"></span> */}
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <input placeholder='District' type="text" class="form-control" id="district" name="district" onChange={(e) => setDataCheckout({ ...dataCheckout, district: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="Huyện"></span> */}
                                    </div>
                                    <div class="col-md-12 form-group p_star">
                                        <input placeholder='City' type="text" class="form-control" id="city" name="city" onChange={(e) => setDataCheckout({ ...dataCheckout, city: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="Tỉnh/thành"></span> */}
                                    </div>

                                    <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP" onChange={(e) => setDataCheckout({ ...dataCheckout, codeCart: e.target.value })} />
                                    </div>
                                    <div class="col-md-12 form-group">

                                    </div>
                                    <div class="col-md-12 form-group">
                                        <div class="creat_account">
                                            <h3>Shipping Details</h3>
                                            <input type="checkbox" id="f-option3" name="selector" />
                                            <label for="f-option3">Ship to a different address?</label>
                                        </div>
                                        <textarea class="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-4">
                                <div class="order_box">
                                    <h2>Your Order</h2>
                                    <ul class="list">
                                        <li><a href="#">Product <span>Total</span></a></li>
                                        <li><a href="#">Fresh Blackberry <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                        <li><a href="#">Fresh Tomatoes <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                        <li><a href="#">Fresh Brocoli <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                    </ul>
                                    <ul class="list list_2">
                                        <li><a href="#">Subtotal <span>$2160.00</span></a></li>
                                        <li><a href="#">Shipping <span>Flat rate: $50.00</span></a></li>
                                        <li><a href="#">Total <span>${total}</span></a></li>
                                    </ul>
                                    <div class="payment_item">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option5" name="selector" />
                                            <label for="f-option5">Check payments</label>
                                            <div class="check"></div>
                                        </div>
                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County,
                                            Store Postcode.</p>
                                    </div>
                                    <div class="payment_item active">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option6" name="selector" />
                                            <label for="f-option6">Paypal </label>
                                            <img src="img/product/card.jpg" alt="" />
                                            <div class="check"></div>
                                        </div>
                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                                            account.</p>
                                    </div>
                                    <div class="creat_account">
                                        <input type="checkbox" id="f-option4" name="selector" />
                                        <label for="f-option4">I’ve read and accept the </label>
                                        <a href="#">terms & conditions*</a>
                                    </div>
                                    <a class="primary-btn" href="#" onClick={() => handleProceed()}>Proceed to Paypal</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================End Checkout Area =================--> */}
        </>
    )
}
export default Checkout