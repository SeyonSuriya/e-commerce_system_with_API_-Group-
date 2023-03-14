import React from 'react'
import "./loginform.css"

export default function loginform() {
  return (
       <div className ="log">
         <h1> LOGIN</h1>
         <form>
            Email :  <input type ="email" placeholder="Email"/><br/><br/>
            Password : <input type ="password" placeholder="password"/>   
                <div className="Log-btn">
                    <br/>
                    <button type='submit'>Log in</button>
                </div>
         </form>       
                <p className="text"> OR LOGIN USING</p>
                <div className="extra-Log">
                    <div className="Facebook"></div>
                    <div className="Google"></div>
                </div>
       </div>
  )
}















