import React, {useState} from 'react';

import './headerstyle.css';

const Header = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <header>
    <div className="container">
      <img className="logo-techworld" src="" alt="logo techworld"/>

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">Search</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Register</a>  
              </li>
              <li>
                
             
              </li>
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Header;
