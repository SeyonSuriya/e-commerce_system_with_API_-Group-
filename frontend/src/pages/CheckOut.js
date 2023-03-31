import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cookies,useCookies } from 'react-cookie';

export default function CheckOut() {
  const [cookies, setCookie] = useCookies(['user']);
    
    console.log(cookies.selectedBooks)
    return (
        <div>
          <Header/>
      
      {
        // Add Codes For Checkout page Here
      }
          <h1>This is Checkout page</h1>
    
    
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
    
          <Footer/>
        </div>
        
      )
    }
    
    