<<<<<<< HEAD
import React from 'react'
import Header from '../components/Header'
import axios from 'axios';

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
        <div className ="verified-image"></div>
        <span id='Message'>Email Verified Successfully </span><br/>
        
        <a href='/login'>Please Login to your account</a>
    </div>
  )
}
=======
import React from 'react'
import Header from '../components/Header'
import axios from 'axios';

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
        <div className ="verified-image"></div>
        <span id='Message'>Email Verified Successfully </span><br/>
        
        <a href='/login'>Please Login to your account</a>
    </div>
  )
}
>>>>>>> 7bc631875d9a1473f4086ab5c991b23e61d8a881
