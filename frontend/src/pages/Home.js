import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./homestyle.css";
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


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
const slideImages = [
  {
    url: '',
   
  },
  {
    url: '',
    
  },
  {
    url: '',
    
  },
];




export default function Home() {

  return (
    <div className='homecontainer'>
      <Header/>

      <div>
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <button>Explore Here</button>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </div>

      <h3>Recommanded Books</h3>
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

























