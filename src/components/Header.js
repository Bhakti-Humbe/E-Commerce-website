import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {FaShoppingCart,FaHome,FaSignInAlt,FaUserAlt,FaList,FaTags} from 'react-icons/fa';
/*import Img1 from './logo.jpg';*/
import {useSelector} from 'react-redux';
//import {useDispatch} from 'react-redux';
//import {DLT} from '../Redux/actions/action';
export default function Header()
{
   const getData = useSelector((state)=>state.cartreducer.carts);
   console.log(getData);
    const [isMobile ,setIsMobile]= useState(false);
    return(
        <div className='Header'>
           <b><i><h2 style={{fontSize:'85px',fontFamily:'Golden Coast Personal Use',marginTop:'-20px',color:'deeppink'}}>ShineUp!!!</h2></i></b>
            <ul className={isMobile ? "Header-links-mobile" : "Header-links" }
        onClick={() => setIsMobile(false)}
        >     <Link to="/" className="home"> 
             <h4><b><li><FaHome className="icons homes "/> Home</li></b></h4>
        </Link>
<Link to="/about" className="about">
         <h4><b><li><FaUserAlt className="icons abte"/>About</li></b></h4>
            </Link>
         <Link to="/product" className="product">
         <h4><b> <li><FaTags className="icons tag"/>Product</li></b></h4>
            </Link>
                  <Link to="/cart" className="cart">
         <h4><b> <li><FaShoppingCart className="icons cartfill"/>Cart</li></b></h4>
            </Link>
   <Link to="/login" className="login">
         <h4><b> <li><FaSignInAlt className="icons sign"/>Login</li></b></h4>
    </Link>
<Link to="/viewdetails" className="viewdetails">
         <h4><b><li><FaList className="icons list"/>ViewDetails</li></b></h4>
            </Link>
            <button className="mobile-menu-icon" 
         onClick={() => setIsMobile(!isMobile)}
        >
            {isMobile ?( 
            <i className="fas fa-times"></i>
            ): (
            <i className="fas fa-bars"></i>
        )}
        </button>
</ul>
       </div>
)
}