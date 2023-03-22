import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';


export default function Product() {
  const [cookies, setCookie] = useCookies(['user']);
  // Remove this Set Cookie after because this will be created form registration page
 // setCookie('email', 'hiransanjeewaa@gmail.com', { path: '/'});
  
  
    const queryParameters = new URLSearchParams(window.location.search)
    const book_id = queryParameters.get("bookid")
    
   
    axios.get(

      'http://localhost:8080/ecommerce/books/details?book_id='+book_id,

      ).then(response=>{
        console.log(response.data[0].book_id);
        document.getElementById('product_name').innerHTML=response.data[0][book_id]
      }
       )
  
  return (
    <div>
      <Header/>
      <span id='product_name'></span>
       
      <Footer/>
    </div>
  )
    }
    
    