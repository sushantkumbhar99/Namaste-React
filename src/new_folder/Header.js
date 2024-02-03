import React from 'react';
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';

const Header = () => {

  const [btnLogin, setBtnLogin] =useState("LOGIN");

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
              <button className='login' onClick={
                ()=>{
                  btnLogin==="LOGIN" ? setBtnLogin("LOGOUT") : setBtnLogin("LOGIN")
              }
            }
              >{btnLogin}
              </button>
            </div>
         </div>
    );
    };
   
export default Header;  