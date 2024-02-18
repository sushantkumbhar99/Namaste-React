import React from "react"; 
import { RESTRO_IMG_URL } from "../utils/constant";


  const Restrocard = (props) => {
    const {resData} = props;
    
    const{cloudinaryImageId, name, avgRating, sla: { slaString },cuisines,areaName }= resData?.info;
  
 
   return( 
     <div className="m-1 overflow-hidden rounded-lg shadow-none  p-4 w-[240px] h-[320px] bg-zinc-50 hover:bg-yellow-50  ">
      <img className=' rounded-lg h-36 w-[100%]' src={RESTRO_IMG_URL+ cloudinaryImageId} />
       <div className="res-data"> 
       <h2 className="font-semibold text-[17px] py-1 text-pretty">{name}</h2>
       <div className="flex justify-between text-prety font-semibold text-neutral-950"> <p> <span>&#9733;</span>  {avgRating || ["New"]}   </p>  <p>{slaString} </p>
     </div>
       
    
       <p className="text-neutral-500 mt-2 font-serif text-sm ">{cuisines.join(", ") ||[]}</p>
       <p className=" text-neutral-600 text-sm  font-serif">{areaName}</p>
       </div>
     </div>
   )
 };



  export const  isVegRestaurant =(Restrocard)=>{
      return (props) =>{
        return(
            <div  >  
              <label className="absolute bg-green-500 text-white px-6   m-3 font-semibold rounded-sm ">Veg</label>
              <Restrocard {...props}/>
            </div>
        )
      };
    };

 export default Restrocard;