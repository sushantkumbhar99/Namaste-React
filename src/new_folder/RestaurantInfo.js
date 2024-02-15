import React from "react";

// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantInfo = ()=>{

// const [resInfo, setResInfo] = useState(null)

   const {resId} =useParams();
   console.log(resId);
const resInfo =useRestaurantMenu(resId)


 if(resInfo === null){
    return  <Shimmer/>
 }

 
const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info ;
 
       
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    return  (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ") }- Rs {costForTwoMessage }</p>
            <h1>Menu</h1>
           <ul>
            {
                itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}--{"Rs"}--{item.card.info.price/100 }</li> )
            }


            

           </ul>

        </div>
 

    )
};

export default RestaurantInfo;
 