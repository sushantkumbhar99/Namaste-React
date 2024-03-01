import React from 'react';
import User from './User';
 import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


class About extends React.Component{
  constructor(props){
    super(props)
    console.log("parent constructor")


    };


 

    render(){
      console.log(" parent render called");
      return(
        <div className='mt-24 pt-10 ml-24 '>
            <h1>This is about us of Namaste React!!! 🚀</h1>
            <div>
              <UserContext.Consumer>
                {
                ({loggedUser}) => <h2>{loggedUser}</h2>
                }
              </UserContext.Consumer>
            </div>
             <User name={"sushant kumbhar (functions)"} />
            <UserClass />
        </div>
      );
    }
}
 

export default About;