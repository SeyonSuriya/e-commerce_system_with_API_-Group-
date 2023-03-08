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
                   
                    <Link className='icontag'>
                    <img src="images/compare.svg" alt="compare" />
                      <p>
                      Compare <br /> Product
                      </p>
                    </Link>
                   
          
                      <Link className='icontag'>
                      <img src="images/wishlist.svg" alt="wishlist" />
                      <p>
                       Favourite <br /> wishlist
                      </p>
                      </Link>
                   
                   
                      <Link className='icontag'>
                      <img src="images/user.svg" alt="user" />
                      <p>
                        Log in <br />  Account
                      </p>
                      </Link>
                   
                   <div>
                      <Link className='icontag'>
                      <img src="images/cart.svg" alt="cart" />
                     <div className='d-flex flex-column gap-10'>
                        <span className='badge'>0</span>
                        <p className='totalprice'>$ 000</p>
                     </div> 
                     
                      
                      </Link>
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
          <div class="dropdown">
          
                 <button class="btn btn-secondary dropdown-toggle bg-transparent" 
                  type="button" data-bs-toggle="dropdown" 
                   aria-expanded="false">
                    Shop Categories
                      </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="mobilephone.js">Mobile Phone</a></li>
    <li><a class="dropdown-item" href="laptopcomputers.js">Laptop Computers</a></li>
    <li><a class="dropdown-item" href="desktopcomputer.js">Desktop Computers</a></li>
  </ul>
</div>
          </div>
          <div className='menu-links'>
            <div className='d-flexx'>
                <NavLink className="pageslink" to="/">Home</NavLink>
                <NavLink className="pageslink" to="/">Store</NavLink>
                <NavLink className="pageslink" to="/">About Us</NavLink>
                <NavLink className="pageslink" to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
       </div>
      </header>
    </>
  )
}

export default Header;