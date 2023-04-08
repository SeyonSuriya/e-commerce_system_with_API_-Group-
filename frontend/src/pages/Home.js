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
         <div classname='overLay'>
      <video src={video03} autoPlay loop muted/></div>
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

      <h1 className='latest-name'>Latest Products</h1><hr />
      <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle bg-transparent" 
                  type="button" data-bs-toggle="dropdown" 
                   aria-expanded="false">
                    Categories
                      </button>
                      
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="Store?query=Arts&Music">Arts & Music</a></li>
    <li><a className="dropdown-item" href="Store?query=Biographs">Biographs</a></li>
    <li><a className="dropdown-item" href="Store?query=Business">Business</a></li>
    <li><a className="dropdown-item" href="Store?query=Comics">Comics</a></li>
    <li><a className="dropdown-item" href="Store?query=Computer&Tech">Computer & Tech</a></li>
    <li><a className="dropdown-item" href="Store?query=Cooking">Cooking</a></li>
    <li><a className="dropdown-item" href="Store?query=Education">Education</a></li>
    <li><a className="dropdown-item" href="Store?query=Entertainment">Entertainment</a></li>
    <li><a className="dropdown-item" href="Store?query=Health&Fitness">Health & Fitness</a></li>
    <li><a className="dropdown-item" href="Store?query=History">History</a></li>
    <li><a className="dropdown-item" href="Store?query=Hobbies&Craft">Hobbies & Craft</a></li>
    <li><a className="dropdown-item" href="Store?query=Home&Garden">Home & Garden</a></li>
    <li><a className="dropdown-item" href="Store?query=Kids">Kids</a></li>
    <li><a className="dropdown-item" href="Store?query=Medical">Medical</a></li>
    <li><a className="dropdown-item" href="Store?query=Mysteries">Mysteries</a></li>
    <li><a className="dropdown-item" href="Store?query=Parenting">Parenting</a></li>
    <li><a className="dropdown-item" href="Store?query=Religion">Religion</a></li>
    <li><a className="dropdown-item" href="Store?query=Romance">Romance</a></li>
    <li><a className="dropdown-item" href="Store?query=Science&Math">Science & Math</a></li>
    <li><a className="dropdown-item" href="Store?query=SocialScience">Social Science</a></li>
    <li><a className="dropdown-item" href="Store?query=Sports">Sports</a></li>
    <li><a className="dropdown-item" href="Store?query=Travel">Travel</a></li>
    <li><a className="dropdown-item" href="Store?query=TrueCrime">True Crime</a></li>
    <li><a className="dropdown-item" href="Store?query=Westerns">Westerns</a></li>
  </ul>

          </div>
      
      
      <div className='topcontain'>
      <div className='card'>
      
      <img src={require("../Images/1.jpg")} className='card-img-top'/>
      <div class='card-body'>
         <h5 class='card-title'>Kite runner</h5>
         <p class='card-text'>$10.00</p>
         <a href='#' className='btn btn-primary'>
            Continue Shopping
         </a>
      </div>
 
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

























