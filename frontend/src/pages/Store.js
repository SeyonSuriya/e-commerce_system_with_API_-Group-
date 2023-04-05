import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import "../components/store.css"

const queryParameters = new URLSearchParams(window.location.search)
const category = queryParameters.get("query")

axios.post(
  'http://localhost:8080/ecommerce/store?category='+category,
  ).then(response=>{
      var products=response.data
      var allproducts=' '
      for (let index = 0; index < products.length; index++) {
        if ((index%4===0)&(index!==0)) {
          allproducts+='</br>'
        }
        allproducts+='<div class="product">'
        allproducts+='<img class="productImg" id="'+products[index].book_id+'_image" alt="product Image" /></br>'
        allproducts+='<span class="book_title">'+products[index].book_title+'</span></br>'
        allproducts+='<span class="book_price">'+products[index].book_price+'</span></br>'
        allproducts+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+products[index].book_id+'_wish_image" style="width:24px;height:24px; "  />&nbsp;&nbsp;'
        allproducts+='<button>Add to Cart</button>'
        allproducts+='</div>'

      }
      document.getElementById('Addproducts').innerHTML=allproducts
      for (let index = 0; index < products.length; index++) {
      document.getElementById(products[index].book_id+'_image').src=require("../Images/"+products[index].book_title+".jpg")
      document.getElementById(tmpproduct[0].book_id+'_wish_image').onclick = function () {
        WishListHandler(tmpproduct[0].book_id)
       } 
    }
      
  }
  )

  

export default function Store() {
  return (
    
     <div>
          <Header/>
      
     <div className='productsDiv'>
      <span id='Addproducts'></span>
     </div>
    
    <br/> <br/> <br/> <br/> <br/> <br/> 
    <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/>
     <Footer/>
        </div>
        
      )
    }
    
    