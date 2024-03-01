import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Loader from "./Loader";
import RestaurantCategories from "./RestaurantCategories";


const RestaurantInfo = ()=>{
   const [showIndex, setShowIndex] = useState(0);

   const {resId} =useParams();
   console.log(resId);
const resInfo =useRestaurantMenu(resId)


// if the info is not present then load the loader
if (!resInfo) {
   return <Loader />;
}


//  The top part of inside menu
const {name, cuisines,areaName ,sla:{lastMileTravelString},
 avgRatingString,totalRatingsString,feeDetails:{message}} = resInfo?.cards[0]?.card?.card?.info || [];
console.log(resInfo?.cards[0]?.card?.card?.info);
 
//  it is required only when you want to load perticular data from array of cards
// const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards [1] ?.card?.card || [] ;
   //  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


//  categories of all restro
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards  || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c)=>c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ) ;

   //  console.log(categories);


   // this is the head part of the info section 

return(
       
      <div className="mt-36  max-w-screen-md mx-auto bg-slate-100   border-b-0 mb-20">
         <div className="bg-white  pb-5 border-b-2 border-dotted ">
            <div>
               <h1 className="font-bold pb-9  text-2xl  ">{name}</h1>
            </div>

            <div className="flex justify-between">
               <div>
                  <p className="font-bold  text-slate-700  text-xl">{name}</p>
                  <p className=" font-serif mt-3 text-gray-500  text-xs  ">{cuisines.join(", ") }</p>
                 <span className="font-serif   text-gray-500  text-xs">{areaName} . </span> 
                 <span  className="font-sans  text-gray-500  text-xs">{lastMileTravelString}</span>
               </div>

               <div className="border p-1 text-center rounded-md">
                  <p className="pb-2 pt-2 border-b-2 text-xs border-gray-300 text-slate-500 font-semibold "><span className="text-red-600">&#9733;</span> {avgRatingString} </p>
                  <p className="  mt-2  text-slate-500 text-xs font-semibold"> {totalRatingsString }  </p>
               </div>

            </div>
            <div className="text-gray-500 mt-3 font-sans text-sm">{message}</div>
         </div>

         <div>
           {
             categories.map((category,index)=>(
             <RestaurantCategories key={category.card.card.title} data={category?.card?.card} showItems ={index === showIndex ?  true : false} 
             setShowIndex={( )=> setShowIndex(index)}   />
             ) ) }
         </div>
        </div>
 

    )
};

export default RestaurantInfo;
 