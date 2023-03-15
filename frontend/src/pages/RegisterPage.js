
import React, { useState } from 'react'
import axios from 'axios';
import "../components/loginform.css"

export default function RegisterPage() {

  const [firstname,setFirstName]=useState(' ');
  const [secondname,setSecondName]=useState(' ');
  const [addressline1,setAddressLine1]=useState(' ');
  const [addressline2,setAddressLine2]=useState(' ');
  const [district,setDistrict]=useState(' ');
  const [province,setProvince]=useState(' ');
  const [postalcode,setPostalcode]=useState(' ');
  const [mobilenumber,setMobile]=useState(' ');
  const [email,setEmail]=useState(' ');
  const [password,setPassword]=useState(' ');
  const [password2,setPassword2]=useState(' ');

  // function Validate(e) {
  //   document.getElementById('firstNameError').innerHTML="Please enter your firstname<br/>";
  //   return false;
  // }

  // function onCreate(e) {

  //     e.preventDefault();
      

  //     const postData = {
  //       firstname,
  //       secondname,
  //       addressline1,
  //       addressline2,
  //       district,
  //       province,
  //       mobilenumber,
  //       postalcode,
  //       email,
  //       password,
  //     };
  //     axios.post(
  //       'http://localhost:8080/ecommerce/register',
  //       postData,
  //       ).then(response=>{
  //         console.log(response.data)
  //         if (response.data === email) {
  //          // document.getElementById('errorMessage').innerHTML=response.data;
  //           document.getElementById("LoginPage").click();
  //         }else{
  //           document.getElementById('errorMessage').innerHTML=response.data;
  //         }
  //       })
  //   }
  // }
  function RemoveError(event) {
    
    document.getElementById(event).innerHTML=" ";
    
  }
 

  function handleSubmit (event) {
    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

   
    
if (firstname===' ') {
      document.getElementById('firstnameError').innerHTML="Please enter your firstname";
      event.preventDefault();
    }else if (secondname===' ') {
      document.getElementById('secondnameError').innerHTML="Please enter your secondname";
      event.preventDefault();
     
     
    }else if (email===' ') {
      document.getElementById('emailError').innerHTML="Please enter your email";
      event.preventDefault();
 
    }
    // Add emial validation here
    else if (addressline1===' ') {
      document.getElementById('addressline1Error').innerHTML="Please enter AddressLine 1";
      event.preventDefault();
     
    }
    else if (addressline2===' ') {
      document.getElementById('addressline2Error').innerHTML="Please enter AddressLine 2";
      event.preventDefault();
   
    }else if (district===' ') {
      document.getElementById('districtError').innerHTML="Please enter your district";
      event.preventDefault();
     
    }else if (province===' ') {
      document.getElementById('provinceError').innerHTML="Please enter your province";
      event.preventDefault();
      
    }else if (postalcode===' ') {
      document.getElementById('postalcodeError').innerHTML="Please enter your postalcode";
      event.preventDefault();
   
    }else if (mobilenumber===' ') {
      document.getElementById('mobilenumberError').innerHTML="Please enter your mobilenumber";
      event.preventDefault();
   
    }else if (mobilenumber.length<10) {
      document.getElementById('mobilenumberError').innerHTML="Mobile number should contain 10 characters";
     
      event.preventDefault();
    }else if( !phoneno.test(mobilenumber)){
      document.getElementById('mobilenumberError').innerHTML="Entered Mobile is Worng";
      event.preventDefault();
    }
    else if (password===' ') {
      document.getElementById('passwordError').innerHTML="Please enter your password";
      event.preventDefault();
    }else if (password2===' ') {
      document.getElementById('password2Error').innerHTML="Please enter your password again";
      event.preventDefault();
    }else if (password2!==password) {
      document.getElementById('password2Error').innerHTML="Passwords not maching";
      event.preventDefault();
    }
    event.preventDefault();
    // to do Password requirements
  }
      

return (
    <div className ="reg">
      <h1> Register </h1>
      <form onSubmit={handleSubmit}>
   Enter your Firstname : <input type='text' name='firstname' value={firstname} onClick={(event)=>RemoveError('firstnameError')}  onChange={(e)=>setFirstName(e.target.value) }></input>
   <span id='firstnameError'></span><br/>
   Enter your Secondname : <input type='text' name='secondname' value={secondname} onClick={(event)=>RemoveError('secondnameError')} onChange={(e)=>setSecondName(e.target.value)}></input>
   <span id='secondnameError'></span><br />
   Enter your email : <input type='email' name='email' value={email} onClick={(event)=>RemoveError('emailError')} onChange={(e)=>setEmail(e.target.value)}></input>
   <span id='emailError'></span><br />
   Enter your AddressLine 1: <input type='text' name='addressline1' value={addressline1} onClick={(event)=>RemoveError('addressline1Error')} onChange={(e)=>setAddressLine1(e.target.value)}></input>
   <span id='addressline1Error'></span><br />
   Enter your AddressLine 2: <input type='text' name='addressline2' value={addressline2} onClick={(event)=>RemoveError('addressline2Error')} onChange={(e)=>setAddressLine2(e.target.value)}></input>
   <span id='addressline2Error'></span><br />
   Enter your District: <input type='text' name='district' value={district} onClick={(event)=>RemoveError('districtError')} onChange={(e)=>setDistrict(e.target.value)}></input>
   <span id='districtError'></span><br />
   Enter your province: <input type='text' name='province' value={province} onClick={(event)=>RemoveError('provinceError')} onChange={(e)=>setProvince(e.target.value)}></input>
   <span id='provinceError'></span><br />
   Enter your Postal code: <input type='text' name='postalcode' value={postalcode} onClick={(event)=>RemoveError('postalcodeError')} onChange={(e)=>setPostalcode(e.target.value)}></input>
   <span id='postalcodeError'></span><br />
   Enter your Mobile Number: <input  type='tel' max="9999999999" name='mobilenumber' maxLength='10' value={mobilenumber} onClick={(event)=>RemoveError('mobilenumberError')} onChange={(e)=>setMobile(e.target.value)}></input>
   <span id='mobilenumberError'></span><br />
   Enter your Password : <input type='text' name='password' maxLength={9} value={password} onClick={(event)=>RemoveError('passwordError')} onChange={(e)=>setPassword(e.target.value)}></input>
   <span id='passwordError'></span><br />
   Confirm your Password : <input type='text' name='password2' value={password2} onClick={(event)=>RemoveError('password2Error')} onChange={(e)=>setPassword2(e.target.value)}></input>
   <span id='password2Error'></span><br />


   <span id='errorMessage' className='ErrorMessage'></span>
             <div className="Log-btn">
                 <br/>
                 <button type='submit'>Sign up</button>
             </div>
       </form>       
             <p className="text"> OR LOGIN USING</p>
             <div className="extra-Log">
                 <div className="Facebook"></div>
                 <div className="Google"></div>
             </div>
             <a href='/login' type="hidden" id="LoginPage" >Click Here</a>
    </div>
)
}



// To do   









