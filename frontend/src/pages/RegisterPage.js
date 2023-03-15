
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


  function onCreate(e) {
    if (!document.getElementById('firstname').value) {
      console.log(document.getElementById('firstname'));
      document.getElementById('firstNameError').innerHTML="Please enter your firstname";
      
    }else{
      e.preventDefault();


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
          if (response.data === 'Login Granted') {
           // document.getElementById('errorMessage').innerHTML=response.data;
            document.getElementById("LoginPage").click();
          }else{
            document.getElementById('errorMessage').innerHTML=response.data;
          }
        })

    }
  
  }

return (
    <div className ="reg">
      <h1> Register </h1>
      <form onSubmit={onCreate}>

   Enter your Firstname : <input type='text' name='firstname' value={firstname} onChange={(e)=>setFirstName(e.target.value)}></input><br />
   <span id='firstNameError'></span>
   Enter your Secondname : <input type='text' name='secondname' value={secondname} onChange={(e)=>setSecondName(e.target.value)}></input><br />
   Enter your email : <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
   Enter your AddressLine 1: <input type='text' name='addressline1' value={addressline1} onChange={(e)=>setAddressLine1(e.target.value)}></input><br />
   Enter your AddressLine 2: <input type='text' name='addressline2' value={addressline2} onChange={(e)=>setAddressLine2(e.target.value)}></input><br />
   Enter your District: <input type='text' name='district' value={district} onChange={(e)=>setDistrict(e.target.value)}></input><br />
   Enter your province: <input type='text' name='province' value={province} onChange={(e)=>setProvince(e.target.value)}></input><br />
   Enter your Postal code: <input type='text' name='postalcode' value={postalcode} onChange={(e)=>setPostalcode(e.target.value)}></input><br />
   Enter your Mobile Number: <input type='text' name='mobilenumber' value={mobilenumber} onChange={(e)=>setMobile(e.target.value)}></input><br />
   Enter your Password : <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
     
   <span id='errorMessage' className='ErrorMessage'></span>
             <div className="Log-btn">
                 <br/>
                 <button type='submit'>Log in</button>
             </div>
       </form>       
             <p className="text"> OR LOGIN USING</p>
             <div className="extra-Log">
                 <div className="Facebook"></div>
                 <div className="Google"></div>
             </div>
             <button href='/login' type="hidden" id="LoginPage" >Click Here</button>
    </div>
)
}













