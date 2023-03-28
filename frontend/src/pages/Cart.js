import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import "../components/cart.css";

export default function Cart() {
  const [cookies, setCookie] = useCookies(['user']);

  // Getting Product Info and creating a row with product data

  function Addtoduct(book_id){
    var row=' '
    axios.get(
      'http://localhost:8080/ecommerce/books/details?book_id='+book_id,
      // eslint-disable-next-line no-loop-func
      ).then(response=>{
        //console.log(tmpproduct)
           var tmpproduct=response.data
           
           row+='<td>'+tmpproduct[0].book_title+'</td>'
           row+='<td>Product Name' 
           row+=' Product Price</td>'
           
           console.log(row)
           document.getElementById(book_id).innerHTML=row

      }
      
      )
      
      
  }







  
  
    axios.post(
      'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
      ).then(response=>{
           if (response.data.length>0) {
            var cart=response.data
            var table='<table class="productsTable">'
            for (let index = 0; index < response.data.length; index++) {
              //console.log(cart[index].item_id)
              table+='<tr><span id="'+cart[index].item_id+'"></span></tr>'
              Addtoduct(cart[index].item_id)
            }
            console.log(table)
            document.getElementById('products').innerHTML=table+'</table>'
           }
          }
  )

//console.log(cartproducts)




    return (
      
      
      <div className="caption left-align">
        <Header/>
  <h3>Upcoming events</h3>
  <span id='products'></span>
  <table>
    <tbody>
      
    </tbody>
  </table>
   
   

    
 </div>
        
      )
    }
    
    