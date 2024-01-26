



import React from 'react';
import  ReactDOM from 'react-dom/client';



// const heading = React.createElement("div",{id:"parent"},"This is the inside in the child");

    //  const jsxHeading = <h1> Namaste React with sushant</h1>
    const root = ReactDOM.createRoot(document.getElementById("root"));

//     const Title = () =>{
//         return <h2> This is the first title of my component</h2>
//     }


// const add = 9+9;
// console.log( add)
//     const ComponentHeading = () =>  (
//         <div id='compo'>
//             <Title/>
//         {add}
//          <h1>First component</h1>
//          </div>
//     )



//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const title =  React.createElement("div",{className:"title"}, 
// [React.createElement("h1",{},"This is h1"),
// React.createElement("h2",{},"This is h2"),
// React.createElement("h3",{},"This is h3 in react")])


//Create the same element using JSX
// const title =  <div className='title'>
//     <h1>This is h1 in jsx</h1>
//     <h2>This is h2 in jsx</h2>
//     <h3>This is h3 in jsx</h3>
// </div>

 
//Create a functional component of the same with JSX

//Pass attributes into the tag in JSX


// const add = 9+9;
// const Title = () =>(
  
//          <div className='title'>
//            <h1>This is h1 in React Component</h1>
//            <h2>This is h2 in React Component</h2>
//            <h3>This is h3 in React Component</h3>
//            {add}
//         </div>
// )


//Composition of Component(Add a component inside another)


// const  Title2 = () => (
//      <div id='title2'>
//         <h1>This is the new component</h1>
//       {<Title/>}  
//       {<Title></Title>}
//      </div>
// )




// app header
const Header =()=>{
  return (
     <div className="header">
         <div className="logo">
          <img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" alt="" />
         </div>
        <div className="list">
          <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>ABOUT</li>
          <li>CART</li>
          </ul>
        </div>
     </div>
  )
}


// app body

const Restrocard =(props)=>{
   const {resData} = props;
   
  //  const{ res}=resdata?.info
 

  return(
    <div className="res-card">
     <img className='restro-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+ resData.info.cloudinaryImageId} />
      <div className="res-data"> 
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(",")}</h5>
      <h5> {resData.info.avgRatingString} rating</h5>
      <h5> {resData.info.sla.slaString} </h5>
      </div>
    </div>
  )
}

const resList =  {
  
    
      "info": {
        "id": "281469",
        "name": "Lavonne",
        "cloudinaryImageId": "emlehbuwgsmryxhwzhvq",
        "locality": "St. Marks Road",
        "areaName": "St. Marks Road",
        "costForTwo": "₹750 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "10530",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-27 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            },
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
        "type": "WEBLINK"
      }
   
    // {
    //   "info": {
    //     "id": "263485",
    //     "name": "Chaayos Chai+Snacks=Relax",
    //     "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
    //     "locality": "Kormangala 8th Block",
    //     "areaName": "Kormangala",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //       "Bakery",
    //       "Beverages",
    //       "Chaat",
    //       "Desserts",
    //       "Home Food",
    //       "Italian",
    //       "Maharashtrian",
    //       "Snacks",
    //       "Street Food",
    //       "Sweets"
    //     ],
    //     "avgRating": 4.5,
    //     "parentId": "281782",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "1K+",
    //     "sla": {
    //       "deliveryTime": 34,
    //       "lastMileTravel": 6.6,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "30-35 mins",
    //       "lastMileTravelString": "6.6 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-27 01:00:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "textExtendedBadges": [
    //         {
    //           "iconId": "guiltfree/GF_Logo_android_3x",
    //           "shortDescription": "options available",
    //           "fontColor": "#7E808C"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "₹125 OFF",
    //       "subHeader": "ABOVE ₹499",
    //       "discountTag": "FLAT DEAL"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "105167",
    //     "name": "Bhartiya Jalpan",
    //     "cloudinaryImageId": "lpikismf7ulkpknsbw2h",
    //     "locality": "Tasker Town",
    //     "areaName": "Commercial Street",
    //     "costForTwo": "₹270 for two",
    //     "cuisines": [
    //       "North Indian",
    //       "Beverages",
    //       "Chaat"
    //     ],
    //     "avgRating": 4.3,
    //     "veg": true,
    //     "parentId": "7518",
    //     "avgRatingString": "4.3",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 28,
    //       "lastMileTravel": 3,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "3.0 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-26 21:30:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "imageBadges": [
    //         {
    //           "imageId": "v1695133679/badges/Pure_Veg111.png",
    //           "description": "pureveg"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "aggregatedDiscountInfoV2": {
          
    //     },
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "pureveg",
    //                 "imageId": "v1695133679/badges/Pure_Veg111.png"
    //               }
    //             }
    //           ]
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
              
    //         }
    //       }
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/bhartiya-jalpan-tasker-town-commercial-street-bangalore-105167",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "176071",
    //     "name": "Brahmins' Thatte Idli",
    //     "cloudinaryImageId": "pe1savupw5miak1g0ylt",
    //     "locality": "Vyalikaval",
    //     "areaName": "Malleshwaram",
    //     "costForTwo": "₹150 for two",
    //     "cuisines": [
    //       "South Indian"
    //     ],
    //     "avgRating": 4.5,
    //     "veg": true,
    //     "parentId": "1312",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "5K+",
    //     "sla": {
    //       "deliveryTime": 34,
    //       "lastMileTravel": 5.7,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "30-35 mins",
    //       "lastMileTravelString": "5.7 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-26 20:45:00",
    //       "opened": true
    //     },
    //     "badges": {
          
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
              
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "₹125 OFF",
    //       "subHeader": "ABOVE ₹349",
    //       "discountTag": "FLAT DEAL"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/brahmins-thatte-idli-vyalikaval-malleshwaram-bangalore-176071",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "12808",
    //     "name": "A2B - Adyar Ananda Bhavan",
    //     "cloudinaryImageId": "pdod4o1em9potwsd22rs",
    //     "locality": "Wilson Garden",
    //     "areaName": "Shanti Nagar",
    //     "costForTwo": "₹300 for two",
    //     "cuisines": [
    //       "South Indian",
    //       "North Indian",
    //       "Sweets",
    //       "Chinese"
    //     ],
    //     "avgRating": 4.5,
    //     "veg": true,
    //     "parentId": "22",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 26,
    //       "lastMileTravel": 3,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "3.0 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-26 22:30:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "imageBadges": [
    //         {
    //           "imageId": "v1695133679/badges/Pure_Veg111.png",
    //           "description": "pureveg"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "pureveg",
    //                 "imageId": "v1695133679/badges/Pure_Veg111.png"
    //               }
    //             }
    //           ]
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
              
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "20% OFF",
    //       "subHeader": "UPTO ₹50"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-wilson-garden-shanti-nagar-bangalore-12808",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "403197",
    //     "name": "The Dessert Zone",
    //     "cloudinaryImageId": "c447c9ce7d0bbe78e46141e866236762",
    //     "locality": "Millars Road",
    //     "areaName": "Vasanth Nagar",
    //     "costForTwo": "₹200 for two",
    //     "cuisines": [
    //       "Bakery",
    //       "Desserts",
    //       "Ice Cream",
    //       "Beverages"
    //     ],
    //     "avgRating": 3.6,
    //     "parentId": "10414",
    //     "avgRatingString": "3.6",
    //     "totalRatingsString": "100+",
    //     "sla": {
    //       "deliveryTime": 32,
    //       "lastMileTravel": 3.5,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "30-35 mins",
    //       "lastMileTravelString": "3.5 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-02-02 00:00:00",
    //       "opened": true
    //     },
    //     "badges": {
          
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
              
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "50% OFF",
    //       "subHeader": "UPTO ₹100"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/the-dessert-zone-millars-road-vasanth-nagar-bangalore-403197",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "312660",
    //     "name": "Samosa Party",
    //     "cloudinaryImageId": "ixgxvfu6ggvw1w1awgr1",
    //     "locality": "Brigade Road",
    //     "areaName": "Brigade Road",
    //     "costForTwo": "₹150 for two",
    //     "cuisines": [
    //       "Fast Food",
    //       "Snacks",
    //       "Beverages",
    //       "Chaat",
    //       "North Indian",
    //       "Street Food",
    //       "Sweets",
    //       "Desserts",
    //       "Punjabi",
    //       "Bakery"
    //     ],
    //     "avgRating": 4.6,
    //     "parentId": "6364",
    //     "avgRatingString": "4.6",
    //     "totalRatingsString": "1K+",
    //     "sla": {
    //       "deliveryTime": 26,
    //       "lastMileTravel": 2.4,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "2.4 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-26 22:00:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "textExtendedBadges": [
    //         {
    //           "iconId": "guiltfree/GF_Logo_android_3x",
    //           "shortDescription": "options available",
    //           "fontColor": "#7E808C"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "60% OFF",
    //       "subHeader": "UPTO ₹120"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/samosa-party-brigade-road-bangalore-312660",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "402714",
    //     "name": "Indiana Burgers",
    //     "cloudinaryImageId": "lflq8ulpskdypnl2gbak",
    //     "locality": "Millars Road",
    //     "areaName": "Vasanth Nagar",
    //     "costForTwo": "₹150 for two",
    //     "cuisines": [
    //       "Burgers",
    //       "American",
    //       "Fast Food",
    //       "Beverages",
    //       "Desserts"
    //     ],
    //     "avgRating": 3.7,
    //     "parentId": "5714",
    //     "avgRatingString": "3.7",
    //     "totalRatingsString": "100+",
    //     "sla": {
    //       "deliveryTime": 34,
    //       "lastMileTravel": 3.5,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "30-35 mins",
    //       "lastMileTravelString": "3.5 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-02-02 00:00:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "textExtendedBadges": [
    //         {
    //           "iconId": "guiltfree/GF_Logo_android_3x",
    //           "shortDescription": "options available",
    //           "fontColor": "#7E808C"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "₹125 OFF",
    //       "subHeader": "ABOVE ₹249",
    //       "discountTag": "FLAT DEAL"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/indiana-burgers-millars-road-vasanth-nagar-bangalore-402714",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "45871",
    //     "name": "Subway",
    //     "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    //     "locality": "Brigade Road",
    //     "areaName": "Central Bangalore",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Fast Food",
    //       "Salads",
    //       "Snacks",
    //       "Desserts",
    //       "Beverages"
    //     ],
    //     "avgRating": 4.3,
    //     "parentId": "2",
    //     "avgRatingString": "4.3",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 29,
    //       "lastMileTravel": 2.2,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "2.2 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-26 23:59:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "textExtendedBadges": [
    //         {
    //           "iconId": "guiltfree/GF_Logo_android_3x",
    //           "shortDescription": "options available",
    //           "fontColor": "#7E808C"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "₹100 OFF",
    //       "subHeader": "ABOVE ₹599",
    //       "discountTag": "FLAT DEAL"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/subway-brigade-road-central-bangalore-bangalore-45871",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "5938",
    //     "name": "Burger King",
    //     "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //     "locality": "Tasker Town",
    //     "areaName": "Shivaji Nagar",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Burgers",
    //       "American"
    //     ],
    //     "avgRating": 4.2,
    //     "parentId": "166",
    //     "avgRatingString": "4.2",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 30,
    //       "lastMileTravel": 2.7,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "2.7 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-27 02:00:00",
    //       "opened": true
    //     },
    //     "badges": {
          
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
              
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "ITEMS",
    //       "subHeader": "AT ₹129"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "6924",
    //     "name": "FreshMenu",
    //     "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
    //     "locality": "Johnson Market",
    //     "areaName": "Richmond Road",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //       "Continental",
    //       "Chinese",
    //       "Oriental",
    //       "Asian",
    //       "Healthy Food",
    //       "Fast Food",
    //       "Indian",
    //       "Desserts"
    //     ],
    //     "avgRating": 4.3,
    //     "parentId": "398",
    //     "avgRatingString": "4.3",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 37,
    //       "lastMileTravel": 2.4,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "35-40 mins",
    //       "lastMileTravelString": "2.4 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-26 23:00:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "textExtendedBadges": [
    //         {
    //           "iconId": "guiltfree/GF_Logo_android_3x",
    //           "shortDescription": "options available",
    //           "fontColor": "#7E808C"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "EVERY ITEM",
    //       "subHeader": "@ ₹100"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/freshmenu-johnson-market-richmond-road-bangalore-6924",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "409923",
    //     "name": "Kaati Zone Rolls & Wraps",
    //     "cloudinaryImageId": "cv0ebvdyhlxscaz5czpe",
    //     "locality": "Millars Road",
    //     "areaName": "Vasanth Nagar",
    //     "costForTwo": "₹150 for two",
    //     "cuisines": [
    //       "Fast Food",
    //       "Bengali",
    //       "Beverages",
    //       "Desserts"
    //     ],
    //     "avgRating": 3.5,
    //     "parentId": "248306",
    //     "avgRatingString": "3.5",
    //     "totalRatingsString": "100+",
    //     "sla": {
    //       "deliveryTime": 30,
    //       "lastMileTravel": 3,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "3.0 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-02-02 00:00:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "textExtendedBadges": [
    //         {
    //           "iconId": "guiltfree/GF_Logo_android_3x",
    //           "shortDescription": "options available",
    //           "fontColor": "#7E808C"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "60% OFF",
    //       "subHeader": "UPTO ₹120"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-millars-road-vasanth-nagar-bangalore-409923",
    //     "type": "WEBLINK"
    //   }
    // },
    // {
    //   "info": {
    //     "id": "490568",
    //     "name": "NOTO - Ice Creams & Desserts",
    //     "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
    //     "locality": "1st Stage",
    //     "areaName": "Indiranagar",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //       "Desserts",
    //       "Ice Cream"
    //     ],
    //     "avgRating": 4.6,
    //     "veg": true,
    //     "parentId": "468478",
    //     "avgRatingString": "4.6",
    //     "totalRatingsString": "500+",
    //     "sla": {
    //       "deliveryTime": 30,
    //       "lastMileTravel": 6.4,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "30-35 mins",
    //       "lastMileTravelString": "6.4 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-01-27 02:00:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "textExtendedBadges": [
    //         {
    //           "iconId": "guiltfree/GF_Logo_android_3x",
    //           "shortDescription": "brand",
    //           "fontColor": "#7E808C"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
              
    //         },
    //         "textBased": {
              
    //         },
    //         "textExtendedBadges": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "brand"
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "60% OFF",
    //       "subHeader": "UPTO ₹120"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
              
    //         },
    //         "video": {
              
    //         }
    //       }
    //     },
    //     "reviewsSummary": {
          
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
          
    //     }
    //   },
    //   "analytics": {
        
    //   },
    //   "cta": {
    //     "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-1st-stage-indiranagar-bangalore-490568",
    //     "type": "WEBLINK"
    //   }
    // },
    //               {
    //                 "info": {
    //                   "id": "281469",
    //                   "name": "Lavonne",
    //                   "cloudinaryImageId": "emlehbuwgsmryxhwzhvq",
    //                   "locality": "St. Marks Road",
    //                   "areaName": "St. Marks Road",
    //                   "costForTwo": "₹750 for two",
    //                   "cuisines": [
    //                     "Bakery",
    //                     "Desserts"
    //                   ],
    //                   "avgRating": 4.6,
    //                   "parentId": "10530",
    //                   "avgRatingString": "4.6",
    //                   "totalRatingsString": "1K+",
    //                   "sla": {
    //                     "deliveryTime": 25,
    //                     "lastMileTravel": 2.3,
    //                     "serviceability": "SERVICEABLE",
    //                     "slaString": "20-25 mins",
    //                     "lastMileTravelString": "2.3 km",
    //                     "iconType": "ICON_TYPE_EMPTY"
    //                   },
    //                   "availability": {
    //                     "nextCloseTime": "2024-01-27 00:00:00",
    //                     "opened": true
    //                   },
    //                   "badges": {
    //                     "imageBadges": [
    //                       {
    //                         "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    //                         "description": "OnlyOnSwiggy"
    //                       },
    //                       {
    //                         "imageId": "newg.png",
    //                         "description": "Gourmet"
    //                       }
    //                     ],
    //                     "textExtendedBadges": [
    //                       {
    //                         "iconId": "guiltfree/GF_Logo_android_3x",
    //                         "shortDescription": "options available",
    //                         "fontColor": "#7E808C"
    //                       }
    //                     ]
    //                   },
    //                   "isOpen": true,
    //                   "aggregatedDiscountInfoV2": {
                        
    //                   },
    //                   "type": "F",
    //                   "badgesV2": {
    //                     "entityBadges": {
    //                       "imageBased": {
    //                         "badgeObject": [
    //                           {
    //                             "attributes": {
    //                               "description": "OnlyOnSwiggy",
    //                               "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    //                             }
    //                           },
    //                           {
    //                             "attributes": {
    //                               "description": "Gourmet",
    //                               "imageId": "newg.png"
    //                             }
    //                           }
    //                         ]
    //                       },
    //                       "textBased": {
                            
    //                       },
    //                       "textExtendedBadges": {
    //                         "badgeObject": [
    //                           {
    //                             "attributes": {
    //                               "description": "",
    //                               "fontColor": "#7E808C",
    //                               "iconId": "guiltfree/GF_Logo_android_3x",
    //                               "shortDescription": "options available"
    //                             }
    //                           }
    //                         ]
    //                       }
    //                     }
    //                   },
    //                   "differentiatedUi": {
    //                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                     "differentiatedUiMediaDetails": {
    //                       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                       "lottie": {
                            
    //                       },
    //                       "video": {
                            
    //                       }
    //                     }
    //                   },
    //                   "reviewsSummary": {
                        
    //                   },
    //                   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //                   "restaurantOfferPresentationInfo": {
                        
    //                   }
    //                 },
    //                 "analytics": {
                      
    //                 },
    //                 "cta": {
    //                   "link": "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
    //                   "type": "WEBLINK"
    //                 }
    //               },
    //               {
    //                 "info": {
    //                   "id": "263485",
    //                   "name": "Chaayos Chai+Snacks=Relax",
    //                   "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
    //                   "locality": "Kormangala 8th Block",
    //                   "areaName": "Kormangala",
    //                   "costForTwo": "₹250 for two",
    //                   "cuisines": [
    //                     "Bakery",
    //                     "Beverages",
    //                     "Chaat",
    //                     "Desserts",
    //                     "Home Food",
    //                     "Italian",
    //                     "Maharashtrian",
    //                     "Snacks",
    //                     "Street Food",
    //                     "Sweets"
    //                   ],
    //                   "avgRating": 4.5,
    //                   "parentId": "281782",
    //                   "avgRatingString": "4.5",
    //                   "totalRatingsString": "1K+",
    //                   "sla": {
    //                     "deliveryTime": 34,
    //                     "lastMileTravel": 6.6,
    //                     "serviceability": "SERVICEABLE",
    //                     "slaString": "30-35 mins",
    //                     "lastMileTravelString": "6.6 km",
    //                     "iconType": "ICON_TYPE_EMPTY"
    //                   },
    //                   "availability": {
    //                     "nextCloseTime": "2024-01-27 01:00:00",
    //                     "opened": true
    //                   },
    //                   "badges": {
    //                     "textExtendedBadges": [
    //                       {
    //                         "iconId": "guiltfree/GF_Logo_android_3x",
    //                         "shortDescription": "options available",
    //                         "fontColor": "#7E808C"
    //                       }
    //                     ]
    //                   },
    //                   "isOpen": true,
    //                   "type": "F",
    //                   "badgesV2": {
    //                     "entityBadges": {
    //                       "imageBased": {
                            
    //                       },
    //                       "textBased": {
                            
    //                       },
    //                       "textExtendedBadges": {
    //                         "badgeObject": [
    //                           {
    //                             "attributes": {
    //                               "description": "",
    //                               "fontColor": "#7E808C",
    //                               "iconId": "guiltfree/GF_Logo_android_3x",
    //                               "shortDescription": "options available"
    //                             }
    //                           }
    //                         ]
    //                       }
    //                     }
    //                   },
    //                   "aggregatedDiscountInfoV3": {
    //                     "header": "₹125 OFF",
    //                     "subHeader": "ABOVE ₹499",
    //                     "discountTag": "FLAT DEAL"
    //                   },
    //                   "differentiatedUi": {
    //                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                     "differentiatedUiMediaDetails": {
    //                       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                       "lottie": {
                            
    //                       },
    //                       "video": {
                            
    //                       }
    //                     }
    //                   },
    //                   "reviewsSummary": {
                        
    //                   },
    //                   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //                   "restaurantOfferPresentationInfo": {
                        
    //                   }
    //                 },
    //                 "analytics": {
                      
    //                 },
    //                 "cta": {
    //                   "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
    //                   "type": "WEBLINK"
    //                 }
    //               },
                
 }


 


const Body=()=>{
  return(
    <div className="body">
       <div className="search">
          <input type="text" placeholder='search here..' />
          <div className="search-buttons">
         <button className='search-button'>Search</button>
         </div>
       </div>
       <div className="res-cards">
        <Restrocard resData={resList}/>
      
         {/* {  resList.map((restaurant) => {
              <Restrocard resData={restaurant}/>
           })} */}
   
       </div>
    </div>
   
  )
}


const Applayout = ()=>{
return(
  <div className="main">
    <Header/>
    <Body/>
  </div>
)
}




 root.render(<Applayout/>); 
