import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function ResetPassword(params) {
  
  const [cookies,setCookie] = useCookies(['user']);

  function ResetPasswordEmail(params) {
    params.preventDefault();
    var emailAddress=cookies.email
    
    const postData = {
      emailAddress
    };
    
    axios.post(
      'http://localhost:8080/ecommerce/resetpassword',
      postData,
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
      <Header/>
      <form onSubmit={ResetPasswordEmail}>
      Please Enter Your Email Address : 
      <input type='email' id='email'></input>
      <button type='submit'>Send password reset link</button>
      <span id='Message'> </span>
      
      </form>
      <br/> <br/> <br/> <br/>
      <br/> <br/> <br/> <br/>
      <br/> <br/> <br/> <br/>
      <br/> <br/> <br/> <br/>
      <br/> <br/> <br/> <br/>
      <Footer/>
  </div>
     
    )
  }


