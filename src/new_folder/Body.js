
import React from "react";
import resList from "../utils/mockdata";
import Restrocard from "./Restrocard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body= () =>{

  const[listofRestaurants, setListofRestaurants] = useState(resList)
 
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] =useState(resList);
  useEffect(()=>{fetchData();},[])
    
  const fetchData = async() => {
    const data = await fetch (
      "https://www.swiggy.com/mapi/homepage/getCards?lat=16.8523973&lng=74.5814773"
    );

      const json= await data.json();

      console.log(json);
      setListofRestaurants()
  }


     return listofRestaurants.length === 0 ? (<Shimmer/>) :(
      <div className="body">
         <div className="filter">

          <div className="search">
            <input type="text" className="text-search" value={searchText} 
              placeholder="find your food..." 
               onChange={(e)=>{setSearchText(e.target.value)}} />

            <button onClick={()=>{
              const filteredRestro = listofRestaurants.filter((res)=> 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
               setFilter(filteredRestro); 
            }
             
          }
            >Search</button>
          </div>
<button onClick={()=>(setFilter(listofRestaurants))}>See All</button>

            <div className="toprated-buttons">
              <button className='toprated-button' onClick={()=> {
              const filteredList = listofRestaurants.filter( (resa)=> resa.info.avgRating >= 4.5);
                 setFilter(filteredList);
                 console.log(filteredList);
            }} >Top rated Restaruants</button>

           </div>
         </div>



         <div className="res-cards">
       
        {
          filter.map((restaurant)=>
           <Restrocard key={restaurant.info.id}   resData={restaurant}/>
           )
        }
             
             
         </div>
      </div>
     
    )
  };

  export default Body;