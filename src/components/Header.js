import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FETCH_DATA_SUCCESS, LOGOUT } from "../redux/actions/action";

import './Header.scss'

const Header = () => {
    //const useSelector = useSelector()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.account.username);

    useEffect(() => {
        if (sessionStorage.getItem("username") !== null) {
            dispatch(
                FETCH_DATA_SUCCESS(
                    sessionStorage.getItem("userAccount"),
                    sessionStorage.getItem("username"),
                    localStorage.getItem("token")
                )
            );
        }
    }, []);

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(LOGOUT())
        navigate('/')
    }


    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="#">Sailor</a></h1>

                    <a href="index.html" className="logo me-auto"><img src="../assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link className="active" to="/">HOME</Link>

                            </li>

                            <li className="dropdown"><a href="#"><span>SHOP</span> <i className="fa-solid fa-chevron-down"></i></a>
                                <ul>
                                    <li><Link to="/about">SHOP CATEGORY</Link></li>
                                    <li><Link to="/product/detail">SHOP DETAIL</Link></li>
                                    <li><a href="#">Testimonials</a></li>

                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">CONTACT</a></li>
                            <li className="search"><i className="fa-solid fa-magnifying-glass"></i></li>
                            <li className="cart"><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                            {username ? <li className="dropdown"><Link className="getstarted ">{username}</Link>
                                <ul>
                                    <li><Link to="/" onClick={(e) => handleLogout(e)}>Log out</Link></li>


                                </ul>
                            </li> : <li><Link to="/login" className="getstarted">LOGIN</Link></li>}
                            {/* <li><Link to="/login" className="getstarted">LOGIN</Link></li> */}
                        </ul>
                        <i className="fa-solid fa-bars bi bi-list mobile-nav-toggle"></i>

                    </nav>

                </div>
            </header>


        </div>

    )
}
export default Header

