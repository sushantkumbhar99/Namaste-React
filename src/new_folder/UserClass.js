import React from "react";
 
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("second constructor")

        this.state={
            userInfo:{
              name:"dummy",
              location:"sangli",
              avatar_url:"xyz.in",

            },
          };
    
    };

    async  componentDidMount(){
      

        const data = await fetch("  https://api.github.com/users/sushantkumbhar99");
        const json = await data.json();
    
    
    this.setState({
      userInfo:json
    
    })
    
        console.log(json);
        }
    
    

    render(){
        const{name,bio,avatar_url}=this.state.userInfo;

      console.log("second render called");

        return (
            <div>
            <img src={avatar_url}/>
            <h2>Name : {name } </h2>
          
            <h2>Bio : {bio} </h2>
    
            <h5>Hobbies : Cricket,Movies </h5>
            </div>
        )
    }
}
export default UserClass