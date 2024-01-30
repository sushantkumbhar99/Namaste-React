import React from "react"; 
import { RESTRO_IMG_URL } from "../utils/constant";


  const Restrocard = (props) => {
    const {resData} = props;
    
    const{cloudinaryImageId, name, avgRating, sla: { slaString },cuisines,areaName }= resData?.info;
  
 
   return(
     <div className="res-card">
      <img className='restro-img' src={RESTRO_IMG_URL+ cloudinaryImageId} />
       <div className="res-data"> 
       <h3>{name}</h3>
       <h5>{avgRating} rating</h5>
       <h5>{slaString} </h5>
       <p>{cuisines.join(",")}</p>
       <p>{areaName}</p>
       </div>
     </div>
   )
 };


 export default Restrocard;