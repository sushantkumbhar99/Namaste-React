
import React from "react";
 
import Restrocard from "./Restrocard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body= () =>{

  const[listofRestaurants, setListofRestaurants] = useState([])
 
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestraunt] =useState([]);

  // console.log("searched");

  useEffect(()=>{fetchData();} ,[])
    
  const fetchData = async() => {
    const data = await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8543973&lng=74.5814773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

 
      const json= await data.json();

      console.log(json);
 
      setListofRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestraunt(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //

     return  listofRestaurants.length ===  0 ? <Shimmer/> : (
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
                 console.log(filteredList);
            }} >Top rated Restaruants</button>

           </div>
         </div>



         <div className="res-cards">
        {
          filteredRestaurant.map ((restaurant) =>
           <Restrocard key={restaurant.info.id}   resData={restaurant}/>
           )
        }     
         </div>
      </div>
     
    )
  };

  export default Body;