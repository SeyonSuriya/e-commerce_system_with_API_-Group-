import React from 'react'
import './footerstyle.css';

const Footer = () => {
  return (
    <div className='containerfooter'>
       <div className='firstline'>
       <h3><a href=''>Tech World</a></h3>
       <h5><a>Terms</a></h5>
       <h5><a>License</a></h5>
       <h5><a>Market</a></h5>
       <h5><a>All Product</a></h5>
       </div>
       <div className='secondline'>
       <h3><a>Help</a></h3>
       <h5><a>Help Center</a></h5>
       <h5><a>Authors</a></h5><a></a>
       </div> 
       <div className='thirdline'>
        <h3><a>OUR COMMUNITY</a></h3>
        <h5><a>Community</a></h5>
        <h5><a>Blog</a></h5>
        <h5><a>Shopping Cart</a></h5>
        <h5><a>My Account</a></h5>
       </div>
       <div className='sendmassage'>
       fourth
       </div>  
    </div>
  )
}

export default Footer;
