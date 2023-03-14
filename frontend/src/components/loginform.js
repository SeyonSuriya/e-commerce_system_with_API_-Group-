import React, { useState } from 'react'
import axios from 'axios';
import "./loginform.css"


export default function Loginform(props) {
  const [email,setEmail]=useState(' ');
  const [password,setPassword]=useState(' ');

  function onCreate(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const postData = {
      email,
      password,
    };
    axios.post(
      'http://localhost:8080/ecommerce/login',
      postData,
      ).then(response=>{
        console.log(response.data)
        if (response.data === 'Login Granted') {
           document.getElementById('errorMessage').innerHTML=response.data;
        }else{
          document.getElementById('errorMessage').innerHTML=response.data;
        }
      })
  }
  return (
       <div className ="log">
         <h1> LOGIN</h1>
         <form onSubmit={onCreate}>

      Enter your name : <input type='text' name='username' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
      Enter your Password : <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
        
      <span id='errorMessage' className='ErrorMessage'></span>
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


