import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { fetchCart } from "../service/cartService"
const Category = () => {

    return (
        <>
            {/* <!-- Start Banner Area --> */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Shop Category page</h1>
                            <nav className="d-flex align-items-center">
                                <Link to="index.html">Home<span className="lnr lnr-arrow-right"></span></Link>
                                <Link to="#">Shop<span className="lnr lnr-arrow-right"></span></Link>
                                <Link to="category.html">Fashon Category</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Area --> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="sidebar-categories">
                            <div className="head">Browse Categories</div>
                            <ul className="main-categories">
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
                                    className="lnr lnr-arrow-right"></span>Fruits and Vegetables<span className="number">(53)</span></Link>
                                    <ul className="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>

                                <li className="main-nav-list"><Link data-toggle="collapse" href="#meatFish" aria-expanded="false" aria-controls="meatFish"><span
                                    className="lnr lnr-arrow-right"></span>Meat and Fish<span className="number">(53)</span></Link>
                                    <ul className="collapse" id="meatFish" data-toggle="collapse" aria-expanded="false" aria-controls="meatFish">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#cooking" aria-expanded="false" aria-controls="cooking"><span
                                    className="lnr lnr-arrow-right"></span>Cooking<span className="number">(53)</span></Link>
                                    <ul className="collapse" id="cooking" data-toggle="collapse" aria-expanded="false" aria-controls="cooking">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#beverages" aria-expanded="false" aria-controls="beverages"><span
                                    className="lnr lnr-arrow-right"></span>Beverages<span className="number">(24)</span></Link>
                                    <ul className="collapse" id="beverages" data-toggle="collapse" aria-expanded="false" aria-controls="beverages">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#homeClean" aria-expanded="false" aria-controls="homeClean"><span
                                    className="lnr lnr-arrow-right"></span>Home and Cleaning<span className="number">(53)</span></Link>
                                    <ul className="collapse" id="homeClean" data-toggle="collapse" aria-expanded="false" aria-controls="homeClean">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link to="#">Pest Control<span className="number">(24)</span></Link></li>
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#officeProduct" aria-expanded="false" aria-controls="officeProduct"><span
                                    className="lnr lnr-arrow-right"></span>Office Products<span className="number">(77)</span></Link>
                                    <ul className="collapse" id="officeProduct" data-toggle="collapse" aria-expanded="false" aria-controls="officeProduct">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#beauttyProduct" aria-expanded="false" aria-controls="beauttyProduct"><span
                                    className="lnr lnr-arrow-right"></span>Beauty Products<span className="number">(65)</span></Link>
                                    <ul className="collapse" id="beauttyProduct" data-toggle="collapse" aria-expanded="false" aria-controls="beauttyProduct">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#healthProduct" aria-expanded="false" aria-controls="healthProduct"><span
                                    className="lnr lnr-arrow-right"></span>Health Products<span className="number">(29)</span></Link>
                                    <ul className="collapse" id="healthProduct" data-toggle="collapse" aria-expanded="false" aria-controls="healthProduct">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link to="#">Pet Care<span className="number">(29)</span></Link></li>
                                <li className="main-nav-list"><Link data-toggle="collapse" href="#homeAppliance" aria-expanded="false" aria-controls="homeAppliance"><span
                                    className="lnr lnr-arrow-right"></span>Home Appliances<span className="number">(15)</span></Link>
                                    <ul className="collapse" id="homeAppliance" data-toggle="collapse" aria-expanded="false" aria-controls="homeAppliance">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-nav-list"><Link className="border-bottom-0" data-toggle="collapse" href="#babyCare" aria-expanded="false"
                                    aria-controls="babyCare"><span className="lnr lnr-arrow-right"></span>Baby Care<span className="number">(48)</span></Link>
                                    <ul className="collapse" id="babyCare" data-toggle="collapse" aria-expanded="false" aria-controls="babyCare">
                                        <li className="main-nav-list child"><Link to="#">Frozen Fish<span className="number">(13)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Dried Fish<span className="number">(09)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Fresh Fish<span className="number">(17)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#">Meat Alternatives<span className="number">(01)</span></Link></li>
                                        <li className="main-nav-list child"><Link to="#" className="border-bottom-0">Meat<span className="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-filter mt-50">
                            <div className="top-filter-head">Product Filters</div>
                            <div className="common-filter">
                                <div className="head">Brands</div>
                                <form action="#">
                                    <ul>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label for="apple">Apple<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label for="asus">Asus<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label for="gionee">Gionee<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label for="micromax">Micromax<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label for="samsung">Samsung<span>(19)</span></label></li>
                                    </ul>
                                </form>
                            </div>
                            <div className="common-filter">
                                <div className="head">Color</div>
                                <form action="#">
                                    <ul>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label for="black">Black<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label for="balckleather">Black
                                            Leather<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label for="blackred">Black
                                            with red<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label for="gold">Gold<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
                                    </ul>
                                </form>
                            </div>
                            <div className="common-filter">
                                <div className="head">Price</div>
                                <div className="price-range-area">
                                    <div id="price-range"></div>
                                    <div className="value-wrapper d-flex">
                                        <div className="price">Price:</div>
                                        <span>$</span>
                                        <div id="lower-value"></div>
                                        <div className="to">to</div>
                                        <span>$</span>
                                        <div id="upper-value"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        {/* <!-- Start Filter Bar --> */}
                        <div className="filter-bar d-flex flex-wrap align-items-center">
                            <div className="sorting nice-select">
                                <select>
                                    <option value="1">Default sorting</option>
                                    <option value="1">Default sorting</option>
                                    <option value="1">Default sorting</option>
                                </select>
                            </div>
                            <div className="sorting mr-auto">
                                <select>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                </select>
                            </div>
                            <div className="pagination">
                                <Link to="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                                <Link to="#" className="active">1</Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <Link to="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                                <Link to="#">6</Link>
                                <Link to="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        {/* <!-- End Filter Bar -->
				<!-- Start Best Seller --> */}
                        <section className="lattest-product-area pb-40 category-list">
                            <div className="row">

                                {/* <!-- single product --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="https://evara.vn/uploads/plugin/product_items/384/icon.jpg" alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <Link to="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- single product --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="https://evara.vn/uploads/plugin/product_items/384/icon.jpg" alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <Link to="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- single product --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="https://evara.vn/uploads/plugin/product_items/384/icon.jpg" alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <Link to="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- single product --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="https://evara.vn/uploads/plugin/product_items/384/icon.jpg" alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <Link to="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- single product --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="https://evara.vn/uploads/plugin/product_items/384/icon.jpg" alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <Link to="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </Link>
                                                <Link to="" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- End Best Seller -->
				<!-- Start Filter Bar --> */}
                        <div className="filter-bar d-flex flex-wrap align-items-center">
                            <div className="sorting mr-auto">
                                <select>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                </select>
                            </div>
                            <div className="pagination">
                                <Link to="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                                <Link to="#" className="active">1</Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <Link to="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                                <Link to="#">6</Link>
                                <Link to="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        {/* <!-- End Filter Bar --> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category