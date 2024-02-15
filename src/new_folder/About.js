import React from 'react';
import User from './User';
 import UserClass from './UserClass';



class About extends React.Component{
  constructor(props){
    super(props)
    console.log("parent constructor")


    };


 

    render(){
      console.log(" parent render called");
      return(
        <div>
       <h1>This is about us of Namaste React!!! 🚀</h1>
        <User name={"sushant kumbhar (functions)"} />
         <UserClass />
        </div>
      );
    }
}
 

export default About;