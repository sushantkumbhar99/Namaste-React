import React from 'react';

import Header from './new_folder/Header';
import Body from './new_folder/Body';
import  ReactDOM from 'react-dom/client';


const Applayout = ()=>{
return(
  <div className="main">
    <Header/>
    <Body/>
  </div>
)
};




const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Applayout/>); 

// export default Applayout;