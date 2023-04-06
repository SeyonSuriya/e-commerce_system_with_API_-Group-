import React, { useState } from 'react'
import axios from 'axios';

export default function ChangePassword() {
    const queryParameters = new URLSearchParams(window.location.search)
    const email = queryParameters.get("email")
    const otp = queryParameters.get("otp")

    

    const postData = {
      email,
      otp
    };
    
    axios.post(
      'http://localhost:8080/ecommerce/changepassword',
      postData,
      ).then(response=>{
        //console.log(response.data)
        if (response.data!=='Create new password') {
          document.getElementById('ChangePassword').innerHTML="<br/>"+response.data+"<br/>";
        }
        
      }
       )
    const [password1,setPassword1]=useState(' ');
    const [password2,setPassword2]=useState(' ');

    function ChangePassword(params) {
     params.preventDefault();
    if (password===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your password";
      params.preventDefault();
    }else if (password1.length<6) {
      document.getElementById('error_message').innerHTML="<br/>Password should contain at least 6 characters";
      params.preventDefault();
    }else if (password2===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your password again";
      params.preventDefault();
    }else if (password2!==password1) {
      document.getElementById('error_message').innerHTML="<br/>Passwords not maching";
      params.preventDefault();
    }else{ 

      const passwordResetDto={
        email,
        password1
      }

      axios.post(
        'http://localhost:8080/ecommerce/addnewpassword',
        passwordResetDto,
        ).then(response=>{
          
          if (response.data!=='Passsword Reset Success') {
          //  document.getElementById('ChangePassword').innerHTML="<br/>"+response.data+"<br/>";
              alert('Passsword Reset Success')  ;
              document.getElementById("login").click();
        }
          
        }
         )

    
    }
  }

  return (
    <div id='resetpasswordPage'>
        <form onSubmit={ChangePassword}>
        Add new Password : <input type='password' id='password1' value={password1}></input>
        Confirm new Password : <input type='password' id='password2' value={password2}></input>
        <button type='submit'>Change PAssword</button>
        </form>
<a  href='/login' id="login" > </a>
    </div>
  )
}
