
import React, { useState } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import "../components/addresschange.css"
import changeaddress from "../assests/changeaddress.png";
import { useCookies } from 'react-cookie';

export default function AddressChange() {
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
  }
  function handleSubmit (event) {
    event.preventDefault();
    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
if (firstname===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your firstname";
   //   event.preventDefault();
      
    }else if (secondname===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your secondname";
   //   event.preventDefault();
    }
    // Add emial validation here
    else if (addressline1===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter AddressLine 1";
    //  event.preventDefault();
     
    }
    else if (addressline2===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter AddressLine 2";
    //  event.preventDefault();
   
    }else if (district===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your district";
   //   event.preventDefault();
     
    }else if (province===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your province";
   //   event.preventDefault();
      
    }else if (postalcode===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your postalcode";
    //  event.preventDefault();
   
    }else if (mobile===' ') {
      document.getElementById('error_message').innerHTML="<br/>Please enter your mobilenumber";
    //  event.preventDefault();
   
    }else if( !phoneno.test(mobile)){
      document.getElementById('error_message').innerHTML="<br/>Please Enter a valid Mobile Number";
    ///  event.preventDefault();
    }
    else if (mobile.length<10) {
      document.getElementById('error_message').innerHTML="<br/>Mobile number should contain 10 characters";
    //  event.preventDefault();
    }
    else if(document.getElementById('default').clicked){
      
      const postData = {
        firstname,
        secondname,
        addressline1,
        addressline2,
        mobile,
        district,
        province,
        postalcode,
        
      };
    
   
  
    
      //setCookie('email', email, { path: '/emailverification' });
      axios.post(
        'http://localhost:8080/ecommerce/changeaddress?addressDto='+postData+'&userid'+cookies.userid,
        ).then(response=>{
          console.log(response.data)
            
        }
         )
         
    }else{
      setCookie('newaddress', firstname+' '+secondname+'</br>'+addressline1+'</br>'+addressline2+'</br>'+district+'</br>'+province+'</br>'+postalcode+'</br>'+mobile, { path: '/checkout'});
      
    }
    document.getElementById("gotocheckout").click();
    
  
   
    // to do Password requirements
  }
      

  // Address change function
  

return (

  <section>
  <div className="addresschange_container">
  
        <div className ="addresschange-image">
        <h1><b></b></h1>
        </div>
    
        <div className="addresschange_content">
            <div className="addresschange_content_row01">
                <h1>Change Address</h1>
                <b><span id='error_message'></span></b>
            </div>
            

       
          <div className="addresschange_content_row02">
          

              <form id='form' className="addresschange_form01"   onSubmit={ handleSubmit } >
    
                  <br/>
                  <input type='text'  placeholder="First Name" className="addresschange_placeholder01"  onClick={(event)=>RemoveError('firstnameError')}  onChange={(e)=>setFirstName(e.target.value) }></input>
                
                  <input type='text'  placeholder="Second Name" className="addresschange_placeholder02" onClick={(event)=>RemoveError('secondnameError')} onChange={(e)=>setSecondName(e.target.value)}></input>

        
                  
                  <br/> <br/>
                  
                  <input type='text' placeholder="Address Line 01" className="addresschange_placeholder01"  onClick={(event)=>RemoveError('addressline1Error')} onChange={(e)=>setAddressLine1(e.target.value)}></input>
                 
                  <input type='text' placeholder="Address Line 02" className="addresschange_placeholder02"  onClick={(event)=>RemoveError('addressline2Error')} onChange={(e)=>setAddressLine2(e.target.value)}></input>
                  <br/> <br/>

                
                
                  
                  <input type='text' placeholder="District" className="addresschange_placeholder01"  onClick={(event)=>RemoveError('districtError')} onChange={(e)=>setDistrict(e.target.value)}></input>
                  
                  <input type='text'placeholder="Province" className='addresschange_placeholder02'  onClick={(event)=>RemoveError('provinceError')} onChange={(e)=>setProvince(e.target.value)}></input>
                     
                  <br/> <br/>

                  <input type='text' placeholder="Postal Code" className='addresschange_placeholder01'  onClick={(event)=>RemoveError('postalcodeError')} onChange={(e)=>setPostalcode(e.target.value)}></input>
                            
                  <br/> <br/>

                  <input type='text' placeholder="Mobile Number" max="9999999999" className='addresschange_placeholder01' maxLength='10' onClick={(event)=>RemoveError('mobilenumberError')} onChange={(e)=>setMobile(e.target.value)}></input>

                  <br/> <br/>
                 
                  
                  

            <div className="addresschange_content_row03">
                  <span id='errorMessage' className='ErrorMessage'></span>  
                  Make this address default &nbsp;&nbsp;&nbsp; <input type='checkbox' id='default'></input>
                   
                   <br/>
                   <span id='error_message'></span><br/>
                   

                  <button type='submit' className="addresschange_button" onClick={AddressChange}>Change Your Address</button>
                  <br/>
                 
                  
                 </div>
                  </form>
                  <a  href='/checkout' id="gotocheckout" > </a>
            
            </div>
      
        </div>
    
  </div>

  </section>
  
    
)
}