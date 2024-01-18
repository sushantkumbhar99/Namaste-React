



import React from 'react';
import  ReactDOM from 'react-dom/client';



// const heading = React.createElement("div",{id:"parent"},"This is the inside in the child");

    //  const jsxHeading = <h1> Namaste React with sushant</h1>


    // root element
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
//            {/* {add} */}
//         </div>
// )


//Composition of Component(Add a component inside another)


// const  Title2 = () => (
//      <div id='title2'>
//         <h1>This is the new component</h1>
//       {<Title/>}  
//       {/* {<Title></Title>} */}
//      </div>
// )


const Heading = ()=> (
    <div id='header-main'>
        <div className="header-logo">SUSHANT~Logo</div>
        <div >
            <input className="header-search" type="text" placeholder='Search here...'  />
            <label htmlFor="">Search</label>
        </div>
        <div className="header-user">
           <span><i class="fa-regular fa-user"></i></span>
        </div>
    </div>
)


 root.render(<Heading/>); 
