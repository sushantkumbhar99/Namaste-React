
import React from "react";
import { useState,useEffect } from "react";
import { Restro_Menu } from "../utils/constant";


const useRestaurantMenu = (resId)=>{
const[resInfo, setResInfo]=useState(null);

useEffect(()=>{
    fetchMenu();
},
[])

const fetchMenu = async ()=>{
    const data = await fetch(Restro_Menu + resId);

      const json = await data.json();
      console.log(json)
 
      setResInfo(json.data)
}

return resInfo;


}

export default useRestaurantMenu;