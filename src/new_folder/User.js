
import React from "react";
import { useState } from "react";

const User =(props)=>{

    return (
        <div>
        <h2>Name : {props.name} </h2>
        
        <h2>Location : Dudhgaon </h2>

        <h5>Hobbies : Cricket,Movies </h5>
        </div>
    )
};

export default User;