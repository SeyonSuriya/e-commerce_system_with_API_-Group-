import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/reset.css";
import Passowrdresetimg01 from "../assests/Passwordreset img 01.png";
import { useState } from 'react'
import axios from 'axios';

export default function Reset(){
    const [password1,setPassword1]=useState(' ');
    const [password2,setPassword2]=useState(' ');

    const queryParameters = new URLSearchParams(window.location.search)
    const email = queryParameters.get("email")
    const otp = queryParameters.get("otp")

    
function CheckAccess(){
    const postData = {
      email,
      otp
    };
    
    axios.post(
      'http://localhost:8080/ecommerce/changepassword',
      postData,
      ).then(response=>{
        console.log(response.data)
        if (response.data!=='Create new password') {
            ChangePassword()
        }else{
            alert("You have not allowed to change your password . Try send another email for changing password ")
        }
        
      }
       )
      
    }

//console.log(CheckAccess())

function ChangePassword(params) {
    
        params.preventDefault();
        
       if (password1===' ') {
         document.getElementById('error_message').innerHTML="</br>Please enter your password";
         params.preventDefault();
       }else if (password1.length<6) {
         document.getElementById('error_message').innerHTML="</br>Password should contain at least 6 characters";
         params.preventDefault();
       }else if (password2===' ') {
         document.getElementById('error_message').innerHTML="</br>Please enter your password again";
         params.preventDefault();
       }else if (password2!==password1) {
         document.getElementById('error_message').innerHTML="</br>Passwords not maching";
         params.preventDefault();
       }else{ 
        var password=password1
const passwordResetDto={
    email,
    password
};  
    axios.post(
        'http://localhost:8080/ecommerce/addnewpassword',
        passwordResetDto,
        ).then(response=>{         
            if (response.data==="Passsword Reset Success") {
            //  document.getElementById('ChangePassword').innerHTML="<br/>"+response.data+"<br/>";
                alert('Passsword Reset Success')  ;
                document.getElementById("login").click();
          } else{
            alert('Passsword Reset Error')  ;
          }
            
          }
           )
}

}

    return(
        <div id='ChangePassword'>
           

            <section className="reset-password-section">
                    <div className="reset-container">
                        <div className='flex-container02'>
                            <h1>RESET  YOUR PASSWORD</h1><br />
                            <div className="reset-image">
                            <img src={Passowrdresetimg01} className='reset_img'id='reset_img' alt=''/>
                            </div><b/><br />
                           

                            
                                <form onSubmit={ChangePassword}>                                  
                                    <label className='reset-form'>Password</label><br/>
                                    <input type="password" placeholder="Password" id='password1' className='reset-form01'  onChange={(e)=>setPassword1(e.target.value)} ></input>
                                    <br /> 
                                  
                                    <label className="reset-form">Confirm Password</label><br/>
                                    <input type="password" id='password2' placeholder=" Confirm Password"   className='reset-form01' onChange={(e)=>setPassword2(e.target.value)} ></input>
                                      <div className='errorDiv'>
                                      <span id='error_message' ></span>
                                      </div>
                                    
                                    <div className='reset-buttons'>
                                        
                                    <button type="submit" className="reset_submit01">Reset</button>                                                                                                        
                                    <br /> 
                                    </div>                                                         
                                </form>                                    
                            
                                <a  href='/login' id="login" > </a>
                        </div>

                    </div>
                </section>

          
        </div>

    )

}