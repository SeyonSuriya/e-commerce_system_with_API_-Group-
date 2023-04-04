
import React, { useState } from 'react'
import axios from 'axios';
import "../components/registerform.css"
import LoginBackgroundimg03 from "../assests/Login Background img 03.jpg";

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

 
  function onCreate() {
      const postData = {
        firstname,
        secondname,
        addressline1,
        addressline2,
        district,
        province,
        mobilenumber,
        postalcode,
        email,
        password,
      };
      axios.post(
        'http://localhost:8080/ecommerce/register',
        postData,
        ).then(response=>{
          console.log(response.data)
          if (response.data === email) {
            document.getElementById("EmailVerification").click();
          }else{
            document.getElementById('errorMessage').innerHTML=response.data;
          }
        })
    }

  function RemoveError(event) {
    document.getElementById(event).innerHTML=" ";
    document.getElementById('passwordRequirements').innerHTML=" ";
    if (event==='passwordError') {
      document.getElementById('passwordRequirements').innerHTML="<br/>Password should contain at least 6 characters";
    }
  }
  function handleSubmit (event) {
    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
if (firstname===' ') {
      document.getElementById('firstnameError').innerHTML="<br/>Please enter your firstname";
      event.preventDefault();
    }else if (secondname===' ') {
      document.getElementById('secondnameError').innerHTML="<br/>Please enter your secondname";
      event.preventDefault();
     
     
    }else if (email===' ') {
      document.getElementById('emailError').innerHTML="<br/>Please enter your email";
      event.preventDefault();
 
    }
    // Add emial validation here
    else if (addressline1===' ') {
      document.getElementById('addressline1Error').innerHTML="<br/>Please enter AddressLine 1";
      event.preventDefault();
     
    }
    else if (addressline2===' ') {
      document.getElementById('addressline2Error').innerHTML="<br/>Please enter AddressLine 2";
      event.preventDefault();
   
    }else if (district===' ') {
      document.getElementById('districtError').innerHTML="<br/>Please enter your district";
      event.preventDefault();
     
    }else if (province===' ') {
      document.getElementById('provinceError').innerHTML="<br/>Please enter your province";
      event.preventDefault();
      
    }else if (postalcode===' ') {
      document.getElementById('postalcodeError').innerHTML="<br/>Please enter your postalcode";
      event.preventDefault();
   
    }else if (mobilenumber===' ') {
      document.getElementById('mobilenumberError').innerHTML="<br/>Please enter your mobilenumber";
      event.preventDefault();
   
    }else if( !phoneno.test(mobilenumber)){
      document.getElementById('mobilenumberError').innerHTML="<br/>Please Enter a valid Mobile Number";
      event.preventDefault();
    }
    else if (mobilenumber.length<10) {
      document.getElementById('mobilenumberError').innerHTML="<br/>Mobile number should contain 10 characters";
      event.preventDefault();
    }
    else if (password===' ') {
      document.getElementById('passwordError').innerHTML="<br/>Please enter your password";
      event.preventDefault();
    }else if (password.length<6) {
      document.getElementById('passwordError').innerHTML="<br/>Password should contain at least 6 characters";
      event.preventDefault();
    }else if (password2===' ') {
      document.getElementById('password2Error').innerHTML="<br/>Please enter your password again";
      event.preventDefault();
    }else if (password2!==password) {
      document.getElementById('password2Error').innerHTML="<br/>Passwords not maching";
      event.preventDefault();
    }
    onCreate();
   
    // to do Password requirements
  }
      

return (
  <section>
  <div className="signup_container">
  
        <div className="signup-image">
          <img src={LoginBackgroundimg03} alt=""/>   
        </div>
    
        <div className="signup_content">
            <div className="signup_content_row01">
                <h1>SignUp</h1>
                <span>Open the door to the world of Books</span>
            </div>
       
          <div className="signup_content_row02">
          

              <form id='form' className="signup_form01" onSubmit={handleSubmit}>
    
                  <label></label><br/>
                  <input type='text'  placeholder="First Name" className="signup_placeholder"  onClick={(event)=>RemoveError('firstnameError')}  onChange={(e)=>setFirstName(e.target.value) }></input>
                  <span id='firstnameError'></span>
                  <input type='text'  placeholder="Second Name" className="signup_placeholder" onClick={(event)=>RemoveError('secondnameError')} onChange={(e)=>setSecondName(e.target.value)}></input>
                  <span id='secondnameError'></span><br/><br />

                  <label></label><br/>
                  <input type='email' placeholder="Email" className="signup_placeholder"  onClick={(event)=>RemoveError('emailError')} onChange={(e)=>setEmail(e.target.value)}></input>
                  <span id='emailError'></span><br /><br/>

                  <label></label><br/>
                  <input type='text' placeholder="Address Line 01" className="signup_placeholder"  onClick={(event)=>RemoveError('addressline1Error')} onChange={(e)=>setAddressLine1(e.target.value)}></input>
                  <span id='addressline1Error'></span>
                  <input type='text' placeholder="Address Line 02" className="signup_placeholder"  onClick={(event)=>RemoveError('addressline2Error')} onChange={(e)=>setAddressLine2(e.target.value)}></input>
                  <span id='addressline2Error'></span><br /><br/>

                  <label></label><br/>
                  <input type='text' placeholder="District" className="signup_placeholder"  onClick={(event)=>RemoveError('districtError')} onChange={(e)=>setDistrict(e.target.value)}></input>
                  <span id='districtError'></span><br /><br/>

               
            

                  <label></label><br/>
                  <input type='text'placeholder="Province" className='signup_placeholder'  onClick={(event)=>RemoveError('provinceError')} onChange={(e)=>setProvince(e.target.value)}></input>
                  <span id='provinceError'></span><br /><br/>

                  <label></label><br/> 
                  <input type='text' placeholder="Postal Code" className='signup_placeholder'  onClick={(event)=>RemoveError('postalcodeError')} onChange={(e)=>setPostalcode(e.target.value)}></input>
                  <span id='postalcodeError'></span><br /><br/>

                  <label></label><br/>
                  <input type='text' placeholder="Mobile Number" max="9999999999" className='signup_placeholder' maxLength='10' onClick={(event)=>RemoveError('mobilenumberError')} onChange={(e)=>setMobile(e.target.value)}></input>
                  <span id='mobilenumberError'></span><br /><br/>

                  <label></label><br/>
                  <input type='password' placeholder="Password" className='signup_placeholder' maxLength={15}  onClick={(event)=>RemoveError('passwordError')} onChange={(e)=>setPassword(e.target.value)}></input>
                  <span id='passwordError'></span><span id='passwordRequirements'></span><br/><br/>
              
                  <label></label><br/>
                  <input type='password' placeholder="Confirm Password" className='signup_placeholder' maxLength={15}  onClick={(event)=>RemoveError('password2Error')} onChange={(e)=>setPassword2(e.target.value)}></input>
                  <span id='password2Error'></span><br/>
              </form>
            
            </div>

            <div className="signup_content_row03">
                  <span id='errorMessage' className='ErrorMessage'></span>  
                   <br/>
                  <button type='submit' className="signup_button">Sign up</button>
                  <br/>
             
                <p id="signup_p">Already have an account ?  <br/>
                  <a  href='/emailverification' id="EmailVerification" > </a>
                  <a  style={{textDecoration:'none'}} href='/login'  id = "LoginPage" >  Click Here to Login</a>
                  </p></div>
       
      
        </div>
    
  </div>

  </section>

    
)
}



// To do   









