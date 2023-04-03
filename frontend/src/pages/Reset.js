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
                        <div className='flex-container02'>
                            <h1>RESET  YOUR PASSWORD</h1><br />
                            <div className="reset-image">
                            <img src={Passowrdresetimg01} className='reset_img'id='reset_img' alt=''/>
                            </div><b/><br />
                           

                            
                                <form >
                                   
                                    <label className='reset-form'>Password</label><br/>
                                    <input type="password" placeholder="Password" className='reset-form01'></input>
                                    <br /> 
                                  
                                    <label className="reset-form">Confirm Password</label><br/>
                                    <input type="password" placeholder=" Confirm Password" className='reset-form01'></input>
                                    <br />    

                                    <div className='reset-buttons'>
                                    <button type="submit" className="reset_submit01">Reset</button>                                                                                                        
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