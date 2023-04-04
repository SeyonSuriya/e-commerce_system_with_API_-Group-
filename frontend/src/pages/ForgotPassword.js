import React from 'react';

import "../components/forgotpassword.css";
import  { useState } from 'react'
import Forgotpasswordimg02 from '../assests/Forgotpassword img 02.png';
import axios from 'axios';
import { useCookies } from 'react-cookie';


export default function ForgotPassword(){
   // const [cookies,setCookie] = useCookies(['user']);

    const [email,setEmail]=useState(' ');



  function ResetPasswordEmail(params) {
    params.preventDefault();
    axios.post(
      'http://localhost:8080/ecommerce/resetpassword?email='+email,
     
      ).then(response=>{
        console.log(response.data)
        if (response.data==='Reset Password link sent') {
          document.getElementById('Message').innerHTML="<br/>"+response.data+"<br/>";
        }else{
          document.getElementById('Message').innerHTML="<br/>"+response.data+"<br/>";
        }
      }
       )

  }





















    return(
        <div>
           
                <section className="forgot-password-section">
                    <div className="forgot-container">
                        <div className='flex-conatiner01'>
                            <h1>FORGOT PASSWORD</h1>
                            <div className="forgot-image">
                            <img src={Forgotpasswordimg02} className='forgot_img'id='forgot_img' alt=''/>
                            </div><b/>
                            <p id="forgot-text"> Please enter
                            your <b>Email address.</b><br /> You will
                            receive an email message with instructions on how to reset
                            your password.</p>
                            <b/>

         
                                <form onSubmit={ResetPasswordEmail}>
                                
                                    <label className="forgot_form">Email Address</label><br/>
                                    <input type="email" placeholder="Email " className='forgot-form01' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                                    <br />      
                                  <div id='ErrorMsgDiv'>
                                  <span id='Message'></span>
                                  </div>
                            
                                    <button type="submit" className="forgot_submit">Submit</button>
                                    <br />            
                        
                                </form>
                         
                         
                                <a style={{textDecoration:'none'}} href='/login'> Back to Login</a>

 

                            

                        </div>

                    </div>
                </section>
           
        </div>
    )
}


