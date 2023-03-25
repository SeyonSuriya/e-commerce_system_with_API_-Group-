import React, { useState } from 'react'
import axios from 'axios';
import "./loginform.css";
import LoginBackgroundimg from "../assests/Login Background img.jpg";

export default function Loginform(props) {
  const [email,setEmail]=useState(' ');
  const [password,setPassword]=useState(' ');

  function RemoveErrorMessages(){
    document.getElementById('ErrorMessage').innerHTML=" "
  }

  function onCreate(e) {
    e.preventDefault();

     if (email===' ') {
      document.getElementById('ErrorMessage').innerHTML="Please Enter Login Credentials"
      e.preventDefault();
     }else if (password===' ') {
      document.getElementById('ErrorMessage').innerHTML="Please Enter Password"
      e.preventDefault();
     }else  {

      const postData = {
        email,
        password,
      };

        axios.post(
          'http://localhost:8080/ecommerce/login',
          postData,
          ).then(response=>{
            if (response.data === 'Login Granted') {
               document.getElementById("Homepage").click();
             }else{
               document.getElementById('ErrorMessage').innerHTML=response.data;
             }
           }
            )
     }
   
    }

  return (
    <section className="Login-container">  
    
    <div className="Login-background">
    <img src={LoginBackgroundimg} alt="Login image" height="566px"/>
    </div>     
    
    <div className ="login-content">
        
        <h1> LOGIN</h1>
         <form onSubmit={onCreate}>

      Email  : <input type='email' id='email' value={email} onClick={RemoveErrorMessages} onChange={(e)=>setEmail(e.target.value)}></input><br />
      Password : <input type='text' value={password} onClick={RemoveErrorMessages} onChange={(e)=>setPassword(e.target.value)}></input><br />
        
      <span id='ErrorMessage' className='ErrorMessage'></span>
                <div className="Log-btn">
                    <br/>
                    <button type='submit'>Log in</button>
                </div>
                
          </form>       
          {
            // *******   Login through Google Accounts ********
            // <p className="text"> OR LOGIN USING</p>
            // <div className="extra-Log">
            //     <div className="Facebook"></div>
            //     <div className="Google"></div>
            // </div> 
          }
                <a href='/' type="hidden" id="Homepage" > </a>
                Don't have an account ? <a href='/register'> Sign up here</a> 

                <a href='/resetpassword'> Forgot password</a>

                       
          
        </div>     
      
       </section>

  )
}


