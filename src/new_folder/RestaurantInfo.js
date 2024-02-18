import React from "react";

// import { useState, useEffect } from "react";
 
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantInfo = ()=>{

   const {resId} =useParams();
   console.log(resId);
const resInfo =useRestaurantMenu(resId)

 
 
const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || [];
 
       
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card || [] ;
    console.log(itemCards);
    return(
        <div>
            <h1>{name || []}</h1>
            <p>{cuisines } - Rs {costForTwoMessage }</p>
            <h1>Menu</h1>
           {/* <ul>
            {
                itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name}--{"Rs"}--{item.card.info.price/100 }
                </li>
                ) )
            }
           </ul> */}

<ul>
            {
               // Check if itemCards is an array before mapping over it
               Array.isArray(itemCards) && itemCards.map((item) => (
                  <li key={item.card.info.id}>
                     {item.card.info.name}--{"Rs"}--{item.card.info.price / 100}
                  </li>
               ))
            } 
         </ul>
        </div>
 

    )
};

export default RestaurantInfo;
 