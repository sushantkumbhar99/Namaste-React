
import React from "react";
import resList from "../utils/mockdata";
import Restrocard from "./Restrocard";
import { useState } from "react";


const Body= () =>{

  const[listofRestaurants, setListofRestaurants] = useState(resList)

    return(
      <div className="body">
         <div className="search">
         
            <div className="search-buttons">
           <button className='search-button' onClick={()=> {
              const filteredList = listofRestaurants.filter( (resa)=> resa.info.avgRating >= 4.6);
                 setListofRestaurants(filteredList);
                 console.log(filteredList);
            }} 
            >Top rated Restaruants</button>

           </div>
         </div>
         <div className="res-cards">
       
        {
          listofRestaurants.map((restaurant)=>
           <Restrocard key={restaurant.info.id}   resData={restaurant}/>
           )
        }
             
             
         </div>
      </div>
     
    )
  };

  export default Body;