import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ForgotPassword(){

    return(
        <div>
            <Header/>
                <section>
                    <div class="forgot-container">
                        <div className='flex conatiner01'>
                            <h1>Forgot Password</h1>
                            <div className="forgot-image">

                            </div><b/>
                            <p id="forgot text"> Please enter
                            your <b>Username</b> or <b>Email address.</b>You will
                            receive an email message with instructions on how to register
                            your password.</p>
                            <b/>

                            <div className="forgot_form">
                                <form id="forgot_form01">
                                    <label>Username/Email Address</label><br/>
                                    <input type="email" placeholder="Email"></input>
                                    <br />
                                    <button type="submit" className="forgot_submit">Submit</button>
                                    <br />
                                </form>
                                <a style={{textDecoration:'none'}} href='/login'> Back to Login</a>

 

                            </div>

                        </div>

                    </div>
                </section>
            <Footer/>
        </div>
    )
}


