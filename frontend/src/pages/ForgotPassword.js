import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/forgotpassword.css";
import Forgotpasswordimg02 from '../assests/Forgotpassword img 02.png';


export default function ForgotPassword(){

    return(
        <div>
            <Header/>
                <section className="forgot-password-section">
                    <div className="forgot-container">
                        <div className='flex-conatiner01'>
                            <h1>Forgot Password</h1>
                            <div className="forgot-image">
                            <img src={Forgotpasswordimg02} className='forgot_img'id='forgot_img' alt=''/>
                            </div><b/>
                            <p id="forgot-text"> Please enter
                            your <b>Username</b> or <b>Email address.</b> You will
                            receive an email message with instructions on how to register
                            your password.</p>
                            <b/>

                            
                                <form>
                                <div className="forgot_form">
                                    <label>Username/Email Address</label><br/>
                                    <input type="email" placeholder="Email"></input>
                                    <br />
                                </div>

                                <div className="forgot_form">
                                    <button type="submit" className="forgot_submit">Submit</button>
                                    <br />
                                </div>
                        
                            </form>
                                <a style={{textDecoration:'none'}} href='/login'> Back to Login</a>

 

                            

                        </div>

                    </div>
                </section>
            <Footer/>
        </div>
    )
}


