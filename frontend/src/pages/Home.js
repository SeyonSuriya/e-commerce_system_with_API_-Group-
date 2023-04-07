import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {BsSearch} from 'react-icons/bs';
import "./homestyle.css";
import { Link } from 'react-router-dom';
import video03 from '../assests/video 02.mp4';
// import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';



const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '570px'
}




export default function Home() {

  return (
    <div className='homecontainer'>
      <Header/>

      <div>
      <div className="video-container">
      <video src={video03} autoPlay loop muted/>
         <div className="video-content">
        
                <div className="input-group">
                <input type="text" 
                className="form-control " 
                placeholder="Search Product Here..." 
                aria-label="Search Product Here..." 
                aria-describedby="basic-addon2" />

                <span className="input-group-text" id="basic-addon2">
                 <BsSearch className='searchicon'/>
                </span>
                </div>
              
         </div>
      </div>
      </div>

      <h3>Recommended Books</h3>
      <div className='topcontain'>
      <div className='items'>
      <Link>
      <img src={require("../Images/1.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link> 
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/2.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/3.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
        
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/4.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/5.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      
      </div>
      
      
      <div className='topcontain'>
      <div className='items'>
      <Link>
      <img src={require("../Images/7.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/8.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
        
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/9.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/10.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/11.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
        
      </div>

     

      
      </div>

      <div className='topcontain'>
      <div className='items'>
      <Link>
      <img src={require("../Images/14.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/15.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/16.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/17.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      <div className='items'>
      <Link>
      <img src={require("../Images/18.jpg")} className='imgs'/>
         <h3>$3.00</h3>
         <h3>Kite Runner</h3>
      </Link>
         
      </div>

      
      </div>

      
      
      <Footer/>
    </div>
    
  )
}

























