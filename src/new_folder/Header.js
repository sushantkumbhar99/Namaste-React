import { LOGO_URL } from '../utils/constant';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import useOnlilneStatuse from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const onlineStatus =useOnlilneStatuse();

  const [btnLogin, setBtnLogin] =useState("LOGIN");
  console.log("Header");
 
  const {loggedUser}=useContext(UserContext);


   const cartItems = useSelector((store)=> store.cart.item)
   console.log(cartItems);

    return(
      <div>
         <div className="flex justify-between  bg-white fixed w-full z-40 top-0  shadow-sm" >
             <div>
              <img className="w-36 ml-4 mix-blend-multiply  " src={LOGO_URL} alt="" />
           
             </div>
            <div className="flex items-center ">
              <ul className='flex m-4 font-semibold  text-gray-950  font-custom  text-md'>
                <li className=' px-4  '>Online Status:{ onlineStatus ? "✅" : "🚫"}</li>
              <li className=' px-4  hover:text-orange-400 '> <Link to={"/"}>HOME</Link></li>
              <li className=' px-4  hover:text-orange-400 ' > <Link to={"/about"}>ABOUT</Link></li>
              <li className=' px-4  hover:text-orange-400'> <Link to={"/contact"}>CONTACT</Link></li>
              <li className='px-4  hover:text-orange-400' > <Link to={"/grocery"}>GROCERY</Link></li>
              {/* <li className=' px-4 '>  <Link to={"/cart"}> CART ({cartItems.length})</Link> </li> */}
              <li className=' px-4  hover:text-orange-400'>  <Link to={"/cart"}>  {cartItems.length ===0 && (<li>CART</li>) || cartItems.length >= 1 && (<li>CART ({cartItems.length})</li>)}</Link> </li>

              <button className=' px-4  hover:text-orange-400' onClick={
                ()=>{
                  btnLogin==="LOGIN" ? setBtnLogin("LOGOUT") : setBtnLogin("LOGIN")
              }
            }
              >{btnLogin}
              </button>
              <li className=' px-4 font-bold  hover:text-orange-400'> {loggedUser} </li>
              
              </ul>
              
            </div>
          </div>
         </div>
    );
    };
   
export default Header;  