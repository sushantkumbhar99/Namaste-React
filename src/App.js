import React from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './new_folder/Header';
import Body from './new_folder/Body';
import About from './new_folder/About';
import Error from './new_folder/Error';
import Contact from './new_folder/Contact';
import { Outlet } from 'react-router-dom';

import { createBrowserRouter,RouterProvider } from 'react-router-dom'; 



const Applayout = ()=>{
return(
  <div className="main">
    <Header/>
    <Outlet/>
  </div>
)
};

const appRouter =createBrowserRouter([

  {
    path: "/",
    element: <Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }
    ],
    errorElement:<Error/>,
  },
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>); 



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './new_folder/Header';
// import Body from './new_folder/Body';
// import About from './new_folder/About';
// import Error from './new_folder/Error';
// import Contact from './new_folder/Contact';

// const AppLayout = () => {
//   return (
//     <div className="main">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Body />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Error />} /> {/* Catch-all route */}
//       </Routes>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
