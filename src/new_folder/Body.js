
import React from "react";
import resList from "../utils/mockdata";
import Restrocard from "./Restrocard";

const Body= () =>{
    return(
      <div className="body">
         <div className="search">
            <input type="text" placeholder='search here..' />
            <div className="search-buttons">
           <button className='search-button'>Search</button>
           </div>
         </div>
         <div className="res-cards">
       
        {
          resList.map((restaurant)=> <Restrocard key={restaurant.info.id}   resData={restaurant}/>)
        }
             
             
         </div>
      </div>
     
    )
  };

  export default Body;