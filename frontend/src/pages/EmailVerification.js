import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function EmailVerification() {

  const [cookies, setCookie] = useCookies(['user']);
  // Remove this Set Cookie after because this will be created form registration page
 // setCookie('email', 'hiransanjeewaa@gmail.com', { path: '/'});
  
  function RequestEmail(params) {

    params.preventDefault();
    var emailAddress=cookies.email
    
    const postData = {
      emailAddress
    };
    
    axios.post(
      'http://localhost:8080/ecommerce/resendverificationlink',
      postData,
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

  return (
    <div>
      <Header/>
        Check your emails and verify your email to {cookies.email}
        If You not received an email click here to resent a link to verify
        <form onSubmit={RequestEmail}>
          <button type='submit'>Resend link</button><br/>
        </form>
        <span id='Message'> </span><br/><br/><br/>
        <a href='/' id='Home' > Homepage</a>
        <Footer/>
    </div>
  )
}