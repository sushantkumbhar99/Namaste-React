
import React from "react";
 
import Restrocard from "./Restrocard";
import { useState,useEffect} from "react";

import { Link } from "react-router-dom";


const Body= () =>{

  const[listofRestaurants, setListofRestaurants] = useState([])
 
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestraunt] =useState([]);

 

  useEffect(()=>{fetchData();} ,[])
    
  const fetchData = async() => {
    const data = await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8543973&lng=74.5814773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

 
      const json= await data.json();

      // console.log(json);
      console.log("Body rendered");
      setListofRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setFilteredRestraunt(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  }
  //

     return  (
        <div className="body">
         <div className="filter">
        
          <div className="search">
            <input type="text" className="text-search" value={searchText} 
              placeholder="find your food..." 
               onChange={(e)=>{setSearchText(e.target.value)}} />

            <button onClick={()=>{
              const filteredRestaurant = listofRestaurants.filter((res)=> 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              
                );
                setFilteredRestraunt(filteredRestaurant); 
            }
             
          }
            >Search</button>
          </div>
        <button onClick={()=> (setFilteredRestraunt(listofRestaurants))}>See All</button>

            <div className="toprated-buttons">
              <button className='toprated-button' onClick={()=> {
              const filteredList = listofRestaurants.filter( (resa)=> resa.info.avgRating >= 4);

                setFilteredRestraunt(filteredList);
             
            }} >Top rated Restaruants</button>

           </div>
         </div>



         <div className="res-cards">
        {
          filteredRestaurant.map ((restaurant) => <Link 
          key={restaurant.info.id} 
           to={"/restaurant/"+restaurant.info.id}>
           <Restrocard  resData={restaurant}/></Link>
           )
        }     
         </div>
      </div>
     
    )
  };

  export default Body;