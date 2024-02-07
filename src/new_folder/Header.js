import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
const Header = () => {


  const [btnLogin, setBtnLogin] =useState("LOGIN");
  console.log("Header");
 

    return(
         <div className="header">
             <div className="logo">
              <img className="logo-img" src={LOGO_URL} alt="" />
           
             </div>
            <div className="list">
              <ul>
                
              <li> <Link to={"/"}>HOME</Link></li>
              <li> <Link to={"/about"}>ABOUT</Link></li>
              <li> <Link to={"/contact"}>CONTACT</Link></li>
              <li>  CART </li>
               
              
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