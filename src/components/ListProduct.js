import { useEffect, useState } from 'react'
import './owl.carousel.css'
import './main.css'
import './ListProduct.scss'
import Product from './Product'

import '../service/productService'
import { fetchAllProduct } from '../service/productService'


const ListProduct = () => {

    const [listProduct, setListProduct] = useState('')

    useEffect(() => {
        console.log('efect')
        fetchProducts()

    }, [])

    const fetchProducts = async () => {
        let res = await fetchAllProduct()
        //let res = await fetchAllUser()
        if (res && res.data.DT) {

            console.log('all data: ', res.data.DT)
            setListProduct(res.data.DT)

        }
    }

    return (

        // <!-- start product Area -->
        < section class="owl-carousel active-product-area section_gap" >
            {/* <!-- single product slide --> */}
            < div class="single-product-slider" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1>Latest Products</h1>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {listProduct ? listProduct.map((item, index) => {
                            return (
                                <Product item={item} />

                            )
                        }) : <div></div>}

                    </div>
                </div>
            </div >
        </section >
        // <!-- end product Area -->
    )
}
export default ListProduct