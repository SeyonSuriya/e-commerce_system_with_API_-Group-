import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';

export default function Cart() {
  const [cookies, setCookie] = useCookies(['user']);
  var cart=1
    function getItemsInCart() {
      axios.post(
        'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
        ).then(response=>{
          
          console.log(response.data.length)
    }
    )
  }
  getItemsInCart()
    
    
    return (
        <div>
          <Header/>
          
          <Footer/>
        </div>
        
      )
    }
    
    