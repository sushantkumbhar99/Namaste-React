// import React, { Suspense, lazy ,useState,useEffect} from 'react'; 
// import  ReactDOM from 'react-dom/client';
// import Header from './new_folder/Header';
// import Body from './new_folder/Body';
// import About from './new_folder/About';
// import Error from './new_folder/Error';
// import Contact from './new_folder/Contact';
// import Cart from './new_folder/Cart';
// import { Outlet } from 'react-router-dom';
// import RestaurantInfo from './new_folder/RestaurantInfo';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'; 
// import UserContext from './utils/UserContext';
// import { Provider } from 'react-redux'
// import appStore from './utils/appStore';
// // import Grocery from './new_folder/Grocery';



// const Grocery = lazy(()=>import('./new_folder/Grocery'));


// const Applayout = ()=>{

// const [userName, setUserName] = useState();

// useEffect(() =>{
//   const data = {
//     name : "Sushant s kumbhar"
//   }
//   setUserName(data.name)
// },[])

// return(

//    <Provider store={appStore}> 

//      <UserContext.Provider value={{loggedUser: userName,setUserName}}>
//     <div className="main">
//     <Header/>
//     <Outlet/>
//     </div>
//   </UserContext.Provider>
//   </Provider>
// )
// };

// const appRouter =createBrowserRouter([

//   {
//     // path: "/",
//     element: <Applayout/>,
//     children:[
//       {
//         path:"/",
//         element:<Body/>
//       },
//       {
//         path: "/about",
//         element: <About/>,
//       },
//       {
//         path: "/contact",
//         element: <Contact/>,
//       },
//       {
//         path: "/grocery",
//         element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> ,
//       },
//       {
//         path: "/restaurant/:resId",
//         element : <RestaurantInfo/>
//       },

//        {
//         path: "/cart",
//         element : <Cart/>
//       }
//     ],
//     errorElement:<Error/>,
//   },
  

// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<RouterProvider router={appRouter}/>); 



// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Header from './new_folder/Header';
// // import Body from './new_folder/Body';
// // import About from './new_folder/About';
// // import Error from './new_folder/Error';
// // import Contact from './new_folder/Contact';

// // const AppLayout = () => {
// //   return (
// //     <div className="main">
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<Body />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="*" element={<Error />} /> {/* Catch-all route */}
// //       </Routes>
// //     </div>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <Router>
// //       <AppLayout />
// //     </Router>
// //   );
// // };

// // ReactDOM.render(<App />, document.getElementById('root'));



import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './new_folder/Header';
import Body from './new_folder/Body';
import About from './new_folder/About';
import Error from './new_folder/Error';
import Contact from './new_folder/Contact';
import Cart from './new_folder/Cart';
import { Outlet } from 'react-router-dom';
import RestaurantInfo from './new_folder/RestaurantInfo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './utils/appStore'; // Import store and persistor

const Grocery = lazy(() => import('./new_folder/Grocery'));

const Applayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sushant s kumbhar"
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Wrap Provider with PersistGate */}
        <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
          <div className="main">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </PersistGate>
    </Provider>
  )
};

const appRouter = createBrowserRouter([

  {
    // path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />
      },

      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },


])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
