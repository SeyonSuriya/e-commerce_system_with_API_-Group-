import React from 'react'
import { Link } from 'react-router-dom';
import "./footerstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faYoutube,
   faFacebook,
   faTwitter,
   faInstagram
 } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='containerfooter'>
      <span className='footer-upper'>
      <div className='firstline'>
       <h3><Link to=''>Tech World</Link></h3>
       <h5><Link to=''>Terms</Link></h5>
       <h5><Link to=''>License</Link></h5>
       <h5><Link to=''>Market</Link></h5>
       <h5><Link to=''>All Product</Link></h5>
       </div>
       <div className='secondline'>
       <h3><Link to=''>Help</Link></h3>
       <h5><Link to=''>Help Center</Link></h5>
       <h5><Link to=''>Authors</Link></h5>
       <h5><Link to=''>Community</Link></h5>
       </div> 
       <div className='thirdline'>
        <h3><Link to=''>OUR COMMUNITY</Link></h3>
        <h5><Link to=''>Blog</Link></h5>
        <h5><Link to=''>Shopping Cart</Link></h5>
        <h5><Link to=''>My Account</Link></h5>
        <h5><Link to='/adminlogin'>Admin Login</Link></h5>
       </div>
       <div className='sendmassage'> 
          <form>
             
             <input type={'email'} className='sendmassageemail' placeholder='Email'>
             </input>

             <br></br>

             <input type={Text} className='sendmassage' placeholder='Massage'>

             </input>
                <br />
             <button className='sendbutton' >Send</button>
          </form> 
       </div>   
       <div className='socialmedia'>
       <Link 
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </Link>
      <br />
      <Link href=""
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </Link>
      <br />
      <Link href="" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Link>
      <br />
      <Link href=""
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>
       </div>
      </span>
       
    </div>
  )
}

export default Footer;
