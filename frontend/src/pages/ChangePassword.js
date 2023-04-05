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
        console.log(response.data)
        if (response.data!=='Create new password') {
          document.getElementById('ChangePassword').innerHTML="<br/>"+response.data+"<br/>";
        }
      }
       )
    const [password1,setPassword1]=useState(' ');
    const [password2,setPassword2]=useState(' ');

    function ChangePassword(params) {
     console.log(password1);   
     console.log(password2);   

    
    }

  return (
    <div id='resetpasswordPage'>
        <form onSubmit={ChangePassword}>
        Add new Password : <input type='password' id='password1' value={password1}></input>
        Confirm new Password : <input type='password' id='password2' value={password2}></input>
        <button type='submit'>Change PAssword</button>
        </form>

    </div>
  )
}
