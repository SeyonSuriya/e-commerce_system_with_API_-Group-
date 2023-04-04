import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import '../components/emailverification.css';



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
             
      <section className='emailverify-section'>
          
          <div className='emailverify-content'>
              <div className='emailverify-image'>
                  </div>
              <h1>Email Confirmation</h1>
              <p>We have sent an email to <b>(EMAIL)</b> to verify
              your email address and activate your account</p><br />

              <p>If you haven't received an email <a style={{textDecoration:'none'}} href=''> Click here </a> 
                 to resend a link to verify. </p>
           
            </div>

          
      </section>
        <Footer/>
    </div>
  )
}