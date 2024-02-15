import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import useOnlilneStatuse from '../utils/useOnlineStatus';


const Header = () => {
  const onlineStatus =useOnlilneStatuse();

  const [btnLogin, setBtnLogin] =useState("LOGIN");
  console.log("Header");
 

    return(
         <div className="header  ">
             <div>
              <img className="logo-img " src={LOGO_URL} alt="" />
           
             </div>
            <div className=" list  ">
              <ul className=' '>
                <li className='  '>Status:{ onlineStatus ? "✅" : "🚫"}</li>
              <li className='   '> <Link to={"/"}>HOME</Link></li>
              <li className='  ' > <Link to={"/about"}>ABOUT</Link></li>
              <li className=' '> <Link to={"/contact"}>CONTACT</Link></li>
              <li className=''> <Link to={"/grocery"}>GROCERY</Link></li>
              <li className=' '>  CART </li>
              <button className=' ' onClick={
                ()=>{
                  btnLogin==="LOGIN" ? setBtnLogin("LOGOUT") : setBtnLogin("LOGIN")
              }
            }
              >{btnLogin}
              </button>
              
              </ul>
              
            </div>
         </div>
    );
    };
   
export default Header;  