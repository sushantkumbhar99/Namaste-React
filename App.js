const heading = React.createElement("div",{id:"parent"},
  [  React.createElement( "div" ,{id:"child"},
       [ React.createElement("h1",{} ,"This is the inside in the child"),
          React.createElement("h2",{} ,"This is the inside in the child")]
        ),
    
        React.createElement( "div" ,{id:"child2"},
        [ React.createElement("h1",{} ,"This is the inside in the child"),
           React.createElement("h2",{} ,"This is the inside in the child")]
         ) 
  ]
        );

     console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
 