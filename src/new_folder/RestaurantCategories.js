 

// import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategories =({data,showItems,setShowIndex })=>{
  
  // const [showItems, setShowItems] =useState(false)

  handleClick=()=>{
    setShowIndex( )
    
  }
  // console.log(data);
    return(
      <div >
         
         <div className="  mx-auto  mb-4 bg-white   p-4 ">
          <div onClick={handleClick } className="flex justify-between"> 
            <span className="font-bold text-lg text-customtitles">{data.title} ({data.itemCards.length})</span> 
            <span>{showItems ? '⬆️' : '⬇️'}</span>
          </div>
         
        { showItems && <ItemsList items={data.itemCards}/>}
        </div>    
      </div>
    )

}

export default RestaurantCategories;