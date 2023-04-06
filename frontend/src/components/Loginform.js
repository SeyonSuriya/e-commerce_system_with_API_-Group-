import React, { useState } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import "./loginform.css";

export default function Loginform(props) {
  const [cookies, setCookie] = useCookies(['user']);
  const [email,setEmail]=useState(' ');
  const [password,setPassword]=useState(' ');
  setCookie('userid', 0, { path: '/'});

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
            if (response.data>0) {
               setCookie('userid', response.data, { path: '/'});
               document.getElementById("Homepage").click();
             }else if(response.data===-1){
               document.getElementById('ErrorMessage').innerHTML="Incorrect Password";
             }else{
              document.getElementById('ErrorMessage').innerHTML="No User Registered for this email";

             }

           }
            )
     }
   
    }

  return (
    <section className="Login-container">  
  
    <div className ="login-image">

     <div className="login-content">
     <h1> LOGIN</h1><br/>
        
<form onSubmit={onCreate}>

    <div className="login_form">
      <label>Email</label><br/>
      <input type="email" className="form-input" placeholder="Enter Your Email" id='email' value={email} onClick={RemoveErrorMessages} onChange={(e)=>setEmail(e.target.value)}></input><br/>
    </div>

    <br/>

    <div className="login_form">
      <label>Password</label><br/>
      <input type="password" className="form-input" placeholder="Enter Your Password"  onClick={RemoveErrorMessages} onChange={(e)=>setPassword(e.target.value)}></input>     
  </div>
          
      <span id='ErrorMessage' className='ErrorMessage'></span>
                <div className="login_form">
                    <button type="submit" className="form_login">Login</button>
                </div>
                
  </form>       
            
            
            
            <a href='/' type="hidden" id="Homepage" > </a>
                Don't have an account ? <a style={{textDecoration:'none'}} href='/register'> Sign up here</a> 

                <a style={{textDecoration:'none'}} href='/forgotpassword'> Forgot password</a>

                       
          
        </div>
        </div>        
      
       </section>

  )
}


// To do get user id from backend