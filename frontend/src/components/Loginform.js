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
        
    <h1> LOGIN</h1><br/>
        
<form onSubmit={onCreate}>

    <div className="form">
      <label>Email</label><br/>
      <input type="email" className="form input" placeholder="Enter Your Email" id='email' value={email} onClick={RemoveErrorMessages} onChange={(e)=>setEmail(e.target.value)}></input><br/>
    </div>

    <br/>

    <div className="form">
      <label>Password</label><br/>
      <input type="password" className="form input" placeholder="Enter Your Password" value={password} onClick={RemoveErrorMessages} onChange={(e)=>setPassword(e.target.value)}></input>     
  </div>
          
      <span id='ErrorMessage' className='ErrorMessage'></span>
                <div className="form">
                    
                    <button type="submit" className="form_login">Login</button>
                </div>
                
  </form>       
            
            
            
            <a href='/' type="hidden" id="Homepage" > </a>
                Don't have an account ? <a style={{textDecoration:'none'}} href='/register'> Sign up here</a> 

                <a style={{textDecoration:'none'}} href='/resetpassword'> Forgot password</a>

                       
          
        </div>     
      
       </section>

  )
}


