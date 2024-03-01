import {useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{

     const cartItems = useSelector((store) => store.cart.item);

     const dispatch = useDispatch();

     const handleClear = ()=>{
        dispatch(clearCart());
     };


    return ( 
        <div className="mt-20 pt-10 w-8/12  text-center  m-auto  ">
            <h1 className="text-center text-3xl font-bold pb-5 text-gray-700">Cart</h1>
            <div className="border-b-2 border-slate-300 ">
                <button className="bg-red-500 m-2 text-white rounded-md py-2 px-4 " onClick={handleClear}>Clear Cart</button>
            </div>
                {cartItems.length===0 && (<h1 className="text-2xl mt-5 font-bold text-red-800">Your Cart is Empty <span className="text-5xl">🤷‍♀️</span>  Add Something On it  </h1>)}
 

            <div className=" ">
              <ItemsList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;