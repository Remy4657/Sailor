import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.scss'
import { userCheckout } from '../service/userService'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'


import { fetchCart, fetchInfoOrder } from "../service/cartService"
import { toast } from 'react-toastify'


const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [EC, setEC] = useState(1)
    const [productCheckout, setProductCheckout] = useState({ checkout: [], shipping: 0, totalMoney: 0 })
    const [paymentMethod, setPaymentMethod] = useState()
    var shipping = 0
    var tt = 0
    let idAccount = sessionStorage.getItem("idAccount")
    let username = sessionStorage.getItem("username")

    //console.log('id account: ', idAccount)
    const [dataCheckout, setDataCheckout] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        commune: '',
        district: '',
        city: '',
        codeCart: '',
        idAccount: +idAccount,
        totalMoney: 0
    })
    useEffect(() => {
        if (!username) {
            navigate("/login?redirect=/checkout")
        }
        //fetchCartF()
        fetchOrderFunc()

    }, [])

    console.log('productCheckout: ', productCheckout)
    const fetchOrderFunc = async () => {
        //alert('me')
        let res = await fetchInfoOrder({ idAccount })
        console.log('res fetch order: ', res.data)

        setProductCheckout({
            ...productCheckout,
            checkout: res.data.DT,
            shipping: res.data.DT[0].Shipping.value,
            totalMoney: res.data.DT.reduce((total, currentValue, currentIndex) => (total + res.data.DT[currentIndex].Products.price * res.data.DT[currentIndex].Products.Cart_Detail.qty), res.data.DT[0].Shipping.value)
        })
        setDataCheckout({ ...dataCheckout, totalMoney: res.data.DT.reduce((total, currentValue, currentIndex) => (total + res.data.DT[currentIndex].Products.price * res.data.DT[currentIndex].Products.Cart_Detail.qty), res.data.DT[0].Shipping.value) })
    }
    console.log('product checkout: ', productCheckout)
    let a = 1
    const handleProceed = async () => {

        let res = await userCheckout({ ...dataCheckout, idPayment: paymentMethod })
        console.log('res post checkout: ', res)

        if (res && res.data.EC == 0) {
            setEC(0)
            //a = res.data.EC
            toast.error(res.data.EM)
        }
    }
    const preventF = (e) => {
        console.log('ec: ', EC)
        if (EC == 0) {
            e.preventDefault()
        }
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
                                        <input required="true" placeholder='Firstname' type="text" class="form-control" id="first" name="name" onChange={(e) => setDataCheckout({ ...dataCheckout, firstname: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="First name"></span> */}
                                    </div>
                                    <div class="col-md-6 form-group p_star">
                                        <input placeholder='Lastname' type="text" class="form-control" id="last" name="name" onChange={(e) => setDataCheckout({ ...dataCheckout, lastname: e.target.value })} />
                                        {/* <span class="placeholder" ></span> */}
                                    </div>

                                    <div class="col-md-6 form-group p_star">
                                        <input placeholder='Phone number' type="text" class="form-control" id="number" name="number" onChange={(e) => setDataCheckout({ ...dataCheckout, phone: e.target.value })} />
                                        {/* <span class="placeholder" data-placeholder="Phone number"></span> */}
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
                                        {productCheckout.checkout.map((item, index) => {
                                            //   a = a + item.Products.price * item.Products.Cart_Detail.qty + productCheckout[0].Shipping.value

                                            return (
                                                <li key={`key-${index}`}><a href='#'>{item.Products.name}<span class="middle">x {item.Products.Cart_Detail.qty}</span><span class="last">${item.Products.Cart_Detail.qty * item.Products.price}</span></a></li>

                                            )
                                        })}

                                    </ul>
                                    <ul class="list list_2">


                                        <li><a href='#'>Shipping: <span>${productCheckout.shipping}</span></a></li>
                                        {/* <li><a href="#">Shipping <span>{productCheckout[0].Shipping.method}: ${productCheckout[0].Shipping.value}.00</span></a></li> */}



                                        <li><a href="#">Total <span>${productCheckout.totalMoney}</span></a></li>
                                    </ul>
                                    <div class="payment_item">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option5" name="selector" value={1} onChange={(e) => { setPaymentMethod(e.target.value) }} />
                                            <label for="f-option5">Check payments</label>
                                            <div class="check"></div>
                                        </div>
                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County,
                                            Store Postcode.</p>
                                    </div>
                                    <div class="payment_item active">
                                        <div class="radion_btn">
                                            <input type="radio" id="f-option6" name="selector" value={2} onChange={(e) => { setPaymentMethod(e.target.value) }} />
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
                                    <div onClick={() => handleProceed()}>

                                        <Link class="primary-btn" to="/thank-you" onClick={(e) => preventF(e)}>Proceed to Paypal</Link>
                                    </div>
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