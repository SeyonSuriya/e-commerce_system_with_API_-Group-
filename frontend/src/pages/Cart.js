import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import "../components/cart.css";

export default function Cart() {
  const [cookies, setCookie] = useCookies(['user']);
  const [cart,setCart]=useState(' ');
  const [temp_productid,setProductId]=useState(' ');
  const [temp_title,setTitle]=useState(' ');
  const [temp_price,setPrice]=useState(' ');
  const [temp_availableunits,setAvailableUnits]=useState(' ');

  function GetCartItems(e) {
    axios.post(
      'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
      ).then(response=>{
        setCart(response.data)
        //console.log(window.cart)
        //console.log(cart)
        //console.log(response.data[0].id)
        //console.log(cart)
        
  }
  )
}

GetCartItems()
var cart2=cart
const handleEvents = (array) => {
  var tablebody=[]
  if(array.length > 0){
    for (let index = 0; index < array.length; index++) {

      axios.get(
        'http://localhost:8080/ecommerce/books/details?book_id='+array[index].book_id,
        ).then(response=>{

          setTitle(response.data[0].book_title)
          setPrice(response.data[0].book_price)
          setAvailableUnits( response.data[0].num_of_units)
         
          /*
          if (!response.data[0].num_of_units>0) {
            document.getElementById('change_units').innerHTML="Out of Stock"
          }
          */
  
        }
         )
      











      tablebody[index]=<tr className='ProductInfo'><td>product {array[index].id}</td></tr>
      
    }return(tablebody)
  }
}
    return (
      
      <div className="caption left-align">
        <Header/>
  <h3>Upcoming events</h3>
  <table>
    <tbody>
      {handleEvents(cart2)}
    </tbody>
  </table>
   
    <Footer/>

    
 </div>
        
      )
    }
    
    