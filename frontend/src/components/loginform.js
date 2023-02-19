 import React from "react";
import "./loginform.css"

const Loginform =()=>{
    return(
    <div className ="log">
            <h1> LOGIN</h1>
            <input type ="email" placeholder="Email"/>
            <input type ="password" placeholder="password"/>   

        <div className="Log-btn">LOGIN</div>
        
        <p className="text"> OR LOGIN USING</p>

        <div className="extra-Log">
             <div className="Facebook"></div>
             <div className="Google"></div>
         </div>

    </div>
    )
}

export default Loginform;
