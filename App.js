



import React from 'react';
import  ReactDOM from 'react-dom/client';



// const heading = React.createElement("div",{id:"parent"},"This is the inside in the child");

    //  const jsxHeading = <h1> Namaste React with sushant</h1>
    const root = ReactDOM.createRoot(document.getElementById("root"));

    const Title = () =>{
        return <h2> This is the first title of my componen </h2>
    }



    const ComponentHeading = () =>  (
        <div id='compo'>
            <Title/>
         <h1>First component</h1>
         </div>
    )

root.render(<ComponentHeading/>); 
