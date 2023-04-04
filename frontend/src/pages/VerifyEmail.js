import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import axios from 'axios';
import './verifyemail.css' ;
import verifyemailimg from "../assests/verifyemail.png";


export default function VerifyEmail() {
    const queryParameters = new URLSearchParams(window.location.search)
    const email = queryParameters.get("email")
    const otp = queryParameters.get("otp")

    const postData = {
      email,
      otp
    };
    
    axios.post(
      'http://localhost:8080/ecommerce/validateemail/verify',
      postData,
      ).then(response=>{
        console.log(response.data)
        if (response.data==='Email Verified') {
          document.getElementById('Message').innerHTML="<br/>"+response.data+"<br/>";
        }else{
          document.getElementById('Message').innerHTML="<br/>"+response.data+"Try to verify again by requesting a another verify link<br/>";
        }
      }
       )

  return (
    <div>
        <Header/>

        <section className='verifyemail-section'>
        
        <div className='verifyemail-content'>

        <div className ="verified-image">
        <img src={verifyemailimg} className='verifyemail_img'/>
        </div>
        <h1 id='welcome'><b>Welcome..!!!</b></h1>
        <span id='Message'><h2>Email Verified Successfully </h2></span><br/>

        <p> Now  you can place orders in <b id='verify_text01'>Book Mart .,.</b>  Please Login to your <br></br>account<br></br></p> 
        
        <a href='/login'><br></br><b>---Click here Login to your account---</b></a>
       
        </div>
        </section>
        <Footer/>
    </div>
  )
}
