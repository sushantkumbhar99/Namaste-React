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
         <div className="flex justify-between bg-pink-100 shadow-lg  " >
             <div>
              <img className="w-40 ml-4 mix-blend-multiply  " src={LOGO_URL} alt="" />
           
             </div>
            <div className="flex items-center ">
              <ul className='flex m-4 font-semibold  text-lg'>
                <li className=' px-4 '>Online Status:{ onlineStatus ? "✅" : "🚫"}</li>
              <li className=' px-4  '> <Link to={"/"}>HOME</Link></li>
              <li className=' px-4 ' > <Link to={"/about"}>ABOUT</Link></li>
              <li className=' px-4'> <Link to={"/contact"}>CONTACT</Link></li>
              <li className='px-4'> <Link to={"/grocery"}>GROCERY</Link></li>
              <li className=' px-4'>  CART </li>
              <button className=' px-4' onClick={
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