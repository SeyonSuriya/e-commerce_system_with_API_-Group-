import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';
import {useState} from "react";
import { useCookies } from 'react-cookie';
import '../components/emailverification.css';
import emailverifyimg01 from "../assests/email verify img 01.png";


export default function EmailVerification() {

  const [cookies, setCookie] = useCookies(['user']);
 // Remove this Set Cookie after because this will be created form registration page
 // setCookie('email', 'hiransanjeewaa@gmail.com', { path: '/'});
  
  function RequestEmail(params) {

    params.preventDefault();
    var email=cookies.email
    
    
    axios.post(
      'http://localhost:8080/ecommerce/resendverificationlink?email='+email,
      
      ).then(response=>{
        console.log(response.data)
        if (response.data==='Email verification link sent') {
          document.getElementById('Message').innerHTML="<br/>"+response.data+"<br/>";
        }else{
          document.getElementById('Message').innerHTML="<br/>"+response.data+"<br/>";
        }
      }
       )
  }
 
  
function GetEmail() {
  return cookies.email
}
 //

  return (
    <div>
    
             
      <section className='emailverify-section'>
          
          <div className='emailverify-content'>
              <div className='emailverify-image'>
                <img src={emailverifyimg01} className='emailverify_img'/>
              </div>
              <h1>Email Confirmation</h1>
              <p >We have sent an email to <b id='verify_text01'>(<span className='email'>{GetEmail()}</span>)</b> . verify
              your email address and activate your account.</p><br />

              <p >If you haven't received an email Click here
                 to resend a link to verify. </p>

                 <form onSubmit={RequestEmail}>
                    <button type='submit' className='emailverify-submit'>Resend link</button><br/>
                </form>
                <span id='Message'></span>
           
            </div>

          
      </section>
       
    </div>
  )
}