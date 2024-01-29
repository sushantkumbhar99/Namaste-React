import React from 'react';
import { LOGO_URL } from '../utils/constant';

const Header = () => {
    return(
         <div className="header">
             <div className="logo">
              <img className="logo-img" src={LOGO_URL} alt="" />
             </div>
            <div className="list">
              <ul>
              <li>HOME</li>
              <li>CONTACT</li>
              <li>ABOUT</li>
              <li>CART</li>
              </ul>
            </div>
         </div>
    );
    };
   
export default Header;  