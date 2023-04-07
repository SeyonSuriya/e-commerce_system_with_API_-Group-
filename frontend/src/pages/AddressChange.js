
import React, { useState } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import "../components/registerform.css"
import LoginBackgroundimg03 from "../assests/Login Background img 03.jpg";
import { useCookies } from 'react-cookie';

export default function RegisterPage() {
  const [cookies, setCookie] = useCookies(['user']);


  const [firstname,setFirstName]=useState(' ');
  const [secondname,setSecondName]=useState(' ');
  const [addressline1,setAddressLine1]=useState(' ');
  const [addressline2,setAddressLine2]=useState(' ');
  const [district,setDistrict]=useState(' ');
  const [province,setProvince]=useState(' ');
  const [postalcode,setPostalcode]=useState(' ');
  const [mobile,setMobile]=useState(' ');


 
  
     
    
   
  

  function RemoveError(event) {
    document.getElementById('error_message').innerHTML="";
   // document.getElementById('passwordRequirements').innerHTML="";
    if (event==='passwordError') {
      document.getElementById('passwordRequirements').innerHTML="<br/>Password should contain at least 6 characters";
    }
  }
  function handleSubmit (event) {
    event.preventDefault();
    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
if (firstname===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your firstname";
      event.preventDefault();
      
    }else if (secondname===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your secondname";
      event.preventDefault();
    }
    // Add emial validation here
    else if (addressline1===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter AddressLine 1";
      event.preventDefault();
     
    }
    else if (addressline2===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter AddressLine 2";
      event.preventDefault();
   
    }else if (district===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your district";
      event.preventDefault();
     
    }else if (province===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your province";
      event.preventDefault();
      
    }else if (postalcode===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your postalcode";
      event.preventDefault();
   
    }else if (mobile===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your mobilenumber";
      event.preventDefault();
   
    }else if( !phoneno.test(mobile)){
      document.getElementById('error_message').innerHTML="<br/>Please Enter a valid Mobile Number";
      event.preventDefault();
    }
    else if (mobile.length<10) {
      document.getElementById('error_message').innerHTML="<br/>Mobile number should contain 10 characters";
      event.preventDefault();
    }
    else{
      const postData = {
        firstname,
        secondname,
        addressline1,
        addressline2,
        district,
        province,
        mobile,
        postalcode,
        
      };
      //setCookie('email', email, { path: '/emailverification' });
      axios.post(
        'http://localhost:8080/ecommerce/register',
        postData,
        ).then(response=>{
          console.log(response.data)
          if (response.data === 'Registration Successful') {
            
            document.getElementById("EmailVerification").click();
          }else {
            document.getElementById('error_message').innerHTML="<br/>"+response.data+"<br/>";
          }
        }
         )
    }
    
  
   
    // to do Password requirements
  }
      

return (
<div>
<Header/>
  <section>
  <div className="signup_container">
  
        <div className="signup-image">
          <img src={LoginBackgroundimg03} alt=""/>   
        </div>
    
        <div className="signup_content">
            <div className="signup_content_row01">
                <h1>SignUp</h1>
                <b><span id='error_message'></span></b>
            </div>
            

       
          <div className="signup_content_row02">
          

              <form id='form' className="signup_form01" onSubmit={handleSubmit}>
    
                  <br/>
                  <input type='text'  placeholder="First Name" className="signup_placeholder01"  onClick={(event)=>RemoveError('firstnameError')}  onChange={(e)=>setFirstName(e.target.value) }></input>
                
                  <input type='text'  placeholder="Second Name" className="signup_placeholder02" onClick={(event)=>RemoveError('secondnameError')} onChange={(e)=>setSecondName(e.target.value)}></input>
                  <br/> <br/>

                  <input type='text' placeholder="Mobile Number" max="9999999999" className='signup_placeholder02' maxLength='10' onClick={(event)=>RemoveError('mobilenumberError')} onChange={(e)=>setMobile(e.target.value)}></input>
        
                  
                  <br/> <br/>
                  
                  <input type='text' placeholder="Address Line 01" className="signup_placeholder01"  onClick={(event)=>RemoveError('addressline1Error')} onChange={(e)=>setAddressLine1(e.target.value)}></input>
                 
                  <input type='text' placeholder="Address Line 02" className="signup_placeholder02"  onClick={(event)=>RemoveError('addressline2Error')} onChange={(e)=>setAddressLine2(e.target.value)}></input>
                  <br/> <br/>

                
                
                  
                  <input type='text' placeholder="District" className="signup_placeholder01"  onClick={(event)=>RemoveError('districtError')} onChange={(e)=>setDistrict(e.target.value)}></input>
                  
                  <input type='text'placeholder="Province" className='signup_placeholder02'  onClick={(event)=>RemoveError('provinceError')} onChange={(e)=>setProvince(e.target.value)}></input>
                     
                  <br/> <br/>

                  <input type='text' placeholder="Postal Code" className='signup_placeholder01'  onClick={(event)=>RemoveError('postalcodeError')} onChange={(e)=>setPostalcode(e.target.value)}></input>
                            
                  
                 
                  
                  

            <div className="signup_content_row03">
                  <span id='errorMessage' className='ErrorMessage'></span>  
                   <br/>
                  <button type='submit' className="signup_button">Sign up</button>
                  <br/>
                  <a  href='/emailverification' id="EmailVerification" > </a>
                <p id="signup_p">Already have an account ?  <br/>
                  
                  <a  style={{textDecoration:'none'}} href='/login'  id = "LoginPage" >  Click Here to Login</a>
                  </p></div>
                  </form>
            
            </div>
      
        </div>
    
  </div>

  </section>
  </div>
    
)
}