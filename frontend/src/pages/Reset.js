import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/reset.css";
import Passowrdresetimg01 from "../assests/Passwordreset img 01.png";
import { useState } from 'react'
import axios from 'axios';

export default function Reset(){
    const [password1,setPassword1]=useState(' ');
    const [password2,setPassword2]=useState(' ');

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



function ChangePassword(params) {
const passwordResetDto={
    email,
    password1
};
    
    axios.post(
        'http://localhost:8080/ecommerce/addnewpassword',
        passwordResetDto,
        ).then(response=>{


        }
        )

    
}

    return(
        <div id='ChangePassword'>
            <Header />

            <section className="reset-password-section">
                    <div className="reset-container">
                        <div className='flex-container02'>
                            <h1>RESET  YOUR PASSWORD</h1><br />
                            <div className="reset-image">
                            <img src={Passowrdresetimg01} className='reset_img'id='reset_img' alt=''/>
                            </div><b/><br />
                           

                            
                                <form onSubmit={ChangePassword}>                                  
                                    <label className='reset-form'>Password</label><br/>
                                    <input type="password" placeholder="Password" className='reset-form01'  onChange={(e)=>setPassword1(e.target.value)} ></input>
                                    <br /> 
                                  
                                    <label className="reset-form">Confirm Password</label><br/>
                                    <input type="password" placeholder=" Confirm Password" className='reset-form01' onChange={(e)=>setPassword2(e.target.value)} ></input>
                                    <br />    

                                    <div className='reset-buttons'>
                                    <button type="submit" className="reset_submit01">Reset</button>                                                                                                        
                                    <br /> 
                                    </div>                                                         
                                </form>                                    
                            

                        </div>

                    </div>
                </section>

            <Footer/>
        </div>

    )

}