
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';
import Login from "./pages/Login";
import About from './pages/About';
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/product/detail/:id" element={<ProductDetail />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />

      </Routes>
      <Footer />


    </div>
  );
}

export default App;
