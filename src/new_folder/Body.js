
import React from "react";
import Restrocard   from "./Restrocard";
import { isVegRestaurant,isOpenRestaurant } from "./Restrocard";
import { useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
 import Loader from "./Loader";
import UserContext from "../utils/UserContext";
const Body= () =>{


  const [searchText, setSearchText] = useState("");
 
  const [filteredRestaurant, setFilteredRestraunt] =useState([]);
  const[listofRestaurants, setListofRestaurants] = useState([]);
  const {loggedUser ,setUserName} =useContext(UserContext);

  const VegRestrocard =isVegRestaurant(Restrocard);
  
  const OpenRestrocard = isOpenRestaurant(Restrocard);

  useEffect(()=>{fetchData();} ,[])
    
  const fetchData = async() => {
    const data = await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8543973&lng=74.5814773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
      const json= await data.json();

       console.log(json);
      // console.log(listofRestaurants);
      setListofRestaurants(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants  || []);
      setFilteredRestraunt(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  }


    return filteredRestaurant.length===0? <Shimmer/> : (
      
        <div className="">
          <div className='flex mx-32 mt-10 pt-20 '>
            <div>
                {/* input bar */}
                  <input type="text" className="ml-4 mr-1 pl-2  border-red-500 focus:outline-0 border caret-blue-500  " value={searchText} 
                    placeholder="find your food..." 
                     onChange={(e)=>{setSearchText(e.target.value)}} />

                {/* search button */}
                  <button className="px-4 shadow-sm font-custom py-1 rounded-2xl   border  text-slate-700 mx-1 my-4"
                    onClick={()=>{
                      const filteredRestaurant = listofRestaurants.filter((res)=> 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())

                      );
                      setFilteredRestraunt(filteredRestaurant); 
                                  }

                            }
                >Search</button>
            </div>


                {/* Search All button */}
            <div>
                  <button className="px-3 shadow-sm font-custom py-1 rounded-2xl  border   text-slate-700 mx-1 my-4"
                    onClick={()=> (setFilteredRestraunt(listofRestaurants))}>See All</button>
            </div>


                {/* Top rated restaurants button */}
            <div className="toprated-buttons">
                  <button className="px-3   shadow-sm font-custom py-1 rounded-2xl  border   text-slate-700 mx-1 my-4" onClick={()=> {
                     const filteredList = listofRestaurants.filter( (resa)=> resa.info.avgRating >= 4);
                      setFilteredRestraunt(filteredList);
                   }}
                  >Top rated Restaruants </button>
            </div>

            <div >
                  <label  >UserName :</label>
                  <input type="text" placeholder="user name" value={loggedUser} onChange={(e)=> setUserName(e.target.value)} className="px-3   shadow-sm font-custom py-1 rounded-2xl  border   text-slate-700 mx-1 my-4" />
            </div>
          </div>
          

          {/* loop all for Restaurants */}
         <div className="flex flex-wrap  m-auto mb-4 mx-32">
             {
                filteredRestaurant.map ((restaurant) =>
                  <Link 
                    key={restaurant.info.id} 
                     to={"/restaurant/"+restaurant.info.id}>

                   { restaurant.info.veg ? <VegRestrocard resData={restaurant}/>  : <Restrocard  resData={restaurant} />  
                     }
                   
                  </Link>
                 )
              }     
         </div>
      </div>
     
    )
  };

  export default Body;