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
        console.log(response.data[0].book_title);
        document.getElementById('book_name').innerHTML=response.data[0].book_title
        document.getElementById('product_image').innerHTML="<img src={require('../Images/"+response.data[0].book_title+".jpg')} alt='product'/>" 
        document.getElementById('book_description').innerHTML=response.data[0].long_description
        document.getElementById('no_of_units').innerHTML=response.data[0].num_of_units
        document.getElementById('book_author').innerHTML=response.data[0].author
        document.getElementById('book_publisher').innerHTML=response.data[0].publisher
        document.getElementById('book_category').innerHTML=response.data[0].category
        document.getElementById('book_price').innerHTML=response.data[0].book_price

      }
       )
  
  return (
    <div>
      <Header/>
      <span id='product_image'></span>
      <span id='book_name'>Book Name</span><br/>
      <span id='book_description'>Book Discription</span><br/>
      Author : <span id='book_author'>Book Author</span><br/>
      Publisher :<span id='book_publisher'>Book publisher</span><br/>
      <span id='book_category'>Book Category</span><br/>
      <span id='book_price'>Book Price</span>$<br/>
      Units Available :<span id='no_of_units'>Book Units</span><br/>
      <Footer/>
    </div>
  )
    }
    
    