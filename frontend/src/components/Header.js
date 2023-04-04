import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
//import { NavLink,Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className='header-top-strip'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-6'>
                <p className='text-whitee mb-0'>
                Easy shopping with Tech World</p>
              </div>
              <div className='col-6'>
                <p className='text-end text-white '>
                Hotline:
                <a className='text-white' href='tel: +94 704341138'>
                  +94704341138
                </a>
                </p>
              </div>
            </div>
          </div>
      </header>
      <header className='header-upper'>
          <div className='container'>
            <div>
              <h4 className='topicweb'>Tech  World</h4>
            </div>
            <div className='row'>
              
              <div className='col'>
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
              <div className='collinks'>
                <div className='headerlinks'>
                   
                  
                   
                    
                      <a className='icontag' href="/wishlist">
                      <img src="images/wishlist.svg" alt="wishlist" />
                      <p>
                       Favourite <br /> wishlist
                      </p>
                      </a>
                      
                   
                      <a className='icontag' href="/login">
                      <img src="images/user.svg" alt="user" />
                      <p>
                        Log in <br />  Account
                      </p>
                      </a>
                   
                   <div>
                      <a className='icontag' href="/cart">
                      <img src="images/cart.svg" alt="cart" />
                     <div className='d-flex flex-column gap-10'>
                      
                        
                     </div> 
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </div>
      </header>
      <header className='header-bottom'>
       <div className='contain-bottom'>
        <div className='menu-bottom'>
          <div>
          <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle bg-transparent" 
                  type="button" data-bs-toggle="dropdown" 
                   aria-expanded="false">
                    Shop Categories
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
          </div>
          <div className='menu-links'>
            <div className='d-flexx'>
                <a className="pageslink" href="/">Home</a>
                <a className="pageslink" href="/store">Store</a>
                <a className="pageslink" href="/aboutUs">About Us</a>
                <a className="pageslink" href="/contactUs">Contact</a>
            </div>
          </div>
        </div>
       </div>
      </header>
      
    </>
  )
}
export default Header;
