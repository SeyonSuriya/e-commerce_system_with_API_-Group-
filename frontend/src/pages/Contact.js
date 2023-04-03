import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import './contact.css';

export default function Contact() {

  return (
    <><div>
      <Header />

      <div class="contact">
        <h1> Contact Us </h1>

        <div class="left">

          <form id="contactform" name="contactform">

            <div class="inputbox">
              <input type="name" placeholder="Name" id="name" class="text" value="" />
              <input type="email" placeholder="Email" id="email" class="text" value="" />
            </div>

            <div class="inputbox">
              <input type="number" placeholder="Number" id="number" class="text" value="" />
              <input type="text" name="subject" placeholder="Subject" id="subject" class="text" value="" />
            </div>

            
              <textarea name="message" id="message" class="textarea" placeholder="Message"></textarea>
            
            <input type="submit" name="submit" value="SUBMIT" id="submit" class="btn" />

          </form>
        </div>

        <div class="right">
          <p>You can contact us using the form to your left, alternatively you can use one of the links below:</p>
          <ul class="contactinfo">
            <li class="phone">+94 756756877</li>
            <li class="email"><a href="mailto:#">test email</a></li>
            <li class="twitter"><a href="http://twitter.com/#">twitter.com/sample</a></li>
          </ul>
        </div>

      </div>
    </div><div class="merge">
      </div><Footer /></>
    
      
    
    
    
  )
}

