import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import pic from '../Images/1.jpg';
import "./homestyle.css";

export default function Home() {



  return (
    <div className='homecontainer'>
      <Header/>
      <div className='topcontain'>
      <div className='items'>
         <img src={pic} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </div>

      <div className='items'>
         <img src={pic} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </div>
      </div>
      
      <Footer/>
    </div>
    
  )
}

























