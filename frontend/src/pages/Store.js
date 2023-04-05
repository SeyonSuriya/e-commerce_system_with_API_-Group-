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
      document.getElementById(products[index].book_id+'_wish_image').onclick = function () {
        WishListHandler(products[index].book_id)
       } 
    }
      
  }
  )
  function changeWishListImage(book_id) {
    axios.post(
      'http://localhost:8080/ecommerce/books/checkwishes?book_id='+book_id+'&userid='+cookies.userid,
      ).then(response=>{
        if (response.data==='wished') {
          //console.log(response.data)
          document.getElementById(book_id+'_wish_image').src=require("../Images/heart2.png")
        }else{
          document.getElementById(book_id+'_wish_image').src=require("../Images/heart1.png")
        }
       }
        )
      } 
function WishListHandler(book_id) {
axios.post(
  'http://localhost:8080/ecommerce/books/checkwishes?book_id='+book_id+'&userid='+cookies.userid,
  ).then(response=>{
    if (response.data==='wished') {
      axios.post(
        'http://localhost:8080/ecommerce/books/removefromwishlist?book_id='+book_id+'&userid='+cookies.userid,
        ).then(response=>{
          document.getElementById(book_id+'_wish_image').src=require("../Images/heart1.png")
         }
          )
    }else{
      axios.post(
        'http://localhost:8080/ecommerce/books/addtowishlist?book_id='+book_id+'&userid='+cookies.userid,
        ).then(response=>{
          document.getElementById(book_id+'_wish_image').src=require("../Images/heart2.png")
         }
          )}
   }
    )
  }

  

export default function Store() {
  const [cookies, setCookie] = useCookies(['user']);
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
    
    