import { Link } from "react-router-dom"

const Product = (props) => {
    const { item } = props
    return (
        <div class="col-lg-3 col-md-6">
            <div class="single-product">
                <img class="img-fluid" src={item.image} alt="" />
                <div class="product-details">
                    <h6>{item.name}</h6>
                    <div class="price">
                        <h6>{item.price}</h6>
                        <h6 class="l-through">{item.priceOld}</h6>
                    </div>
                    <div class="prd-bottom">
                        <a href="" class="social-info">
                            <span class="ti-bag"><i class="fa-solid fa-cart-shopping"></i></span>
                            <p class="hover-text">add to bag</p>
                        </a>
                        <a href="" class="social-info">
                            <span class="lnr lnr-heart"><i class="fa-regular fa-heart"></i></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="" class="social-info">
                            <span class="lnr lnr-sync"><i class="fa-solid fa-arrows-rotate"></i></span>
                            <p class="hover-text">compare</p>
                        </a>
                        <a href="" class="social-info">
                            <span class="lnr lnr-move"><i class="fa-solid fa-info"></i></span>
                            <p class="hover-text"><Link to={`/product/detail/${item.id}`}>view more</Link></p>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Product