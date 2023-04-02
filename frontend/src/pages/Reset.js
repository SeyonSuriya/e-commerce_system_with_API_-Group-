import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/reset.css";
import Passowrdresetimg01 from "../assests/Passwordreset img 01.png";

export default function Reset(){
    return(
        <div>
            <Header />

            <section className="reset-password-section">
                    <div className="reset-container">
                        <div className='flex-conatiner02'>
                            <h1>RESET PASSWORD</h1>
                            <div className="reset-image">
                            <img src={Passowrdresetimg01} className='forgot_img'id='forgot_img' alt=''/>
                            </div><b/>
                           

                            
                                <form >
                                    <div  className="reset_form">
                                    <label>Password</label><br/>
                                    <input type="password" placeholder="Password" className='reset-form01'></input>
                                    <br /> 
                                    </div> 

                                    <div  className="reset_form">
                                    <label className="reset_form">Confirm Password</label><br/>
                                    <input type="password" placeholder=" Confirm Password" className='reset-form01'></input>
                                    <br />    
                                    </div>
                       
                                    <div  className="reset_form">
                                    <button type="submit" className="reset_submit01">Reset</button>  
                                    </div>

                                    <div  className="reset_form">                                 
                                    <button type="submit" className="reset_submit02">Return to Login</button>
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