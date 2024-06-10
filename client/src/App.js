import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import LoginPopUp from './components/LoginPopUp';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails'

function App() {
  const [loginpopup,setLoginpopup]=React.useState(true);
  const [isLogin,setIsLogin]=React.useState(true);
  const toggleLogin=()=>{
    setLoginpopup(!loginpopup);
  }
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar toggleLogin={toggleLogin}/>
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/productdetails' element={<ProductDetails/>}/>
          </Routes>

        </main>
        <Footer />
        <LoginPopUp toggleLogin={toggleLogin} loginpopup={loginpopup} isLogin={isLogin} setIsLogin={setIsLogin}/>
      </div>
    </Router>
  );
}

export default App;
