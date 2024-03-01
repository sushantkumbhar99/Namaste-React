import React, { useContext } from "react"; 
import { RESTRO_IMG_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";


  const Restrocard = (props) => {
    const {resData} = props;
    
    const{cloudinaryImageId, name, avgRating, sla: { slaString },cuisines,areaName }= resData?.info;
    
    const {loggedUser} =useContext(UserContext)
 
   return( 
     <div className="m-1 mb-2 overflow-hidden   shadow-none  p-4 w-[240px]  h-[330px] hove   ">
       <img className=' rounded-xl h-36 w-[100%] hover: transition-transform duration-50 ease-in-out transform hover:scale-95' src={RESTRO_IMG_URL+ cloudinaryImageId} />
       <div className="res-data"> 
           <h2 className="font-semibold text-[17px] py-1 text-pretty">{name}</h2>
           <div className="flex justify-between text-prety font-semibold text-neutral-950"> <p> <span>&#9733;</span>  {avgRating || ["New"]}   </p>  <p>{slaString} </p>
            </div>
       
    
           <p className="text-neutral-500 mt-2 font-serif text-sm ">{cuisines.join(", ") ||[]}</p>
           <p className=" text-neutral-600 text-sm  font-serif">{areaName}</p>
           {/* <p className=" text-neutral-600 text-sm  font-serif">{loggedUser}</p> */}
       </div>
     </div>
   )
 };



  export const  isVegRestaurant =(Restrocard)=>{
      return (props) =>{
        return(
            <div className="relative  " >  
              <label className="absolute bg-green-500  text-white px-6   z-10   m-3 font-semibold rounded-sm  ">
                Veg</label>
              <Restrocard {...props}/>
            </div>
        )
      };
    };


    export const isOpenRestaurant = ( Restrocard) =>{
      return (props) => {
        return(
            <div className="bg-black">
              <Restrocard {...props}/>
            </div>
            
        )
      };
    };

 export default Restrocard;