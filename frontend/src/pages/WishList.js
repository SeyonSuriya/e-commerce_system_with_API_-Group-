import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/wishlist.css';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';

export default function WishList() {
  const [cookies, setCookie] = useCookies(['user']);
  var wishlist=[]
  axios.post(
    'http://localhost:8080/ecommerce/wishes?userid='+cookies.userid,
    ).then(response=>{
      //console.log(response.data)
      setCookie('wishlist', response.data, { path: '/wishlist'});
      
      var products=' '
      for (let index = 0; index < cookies.wishlist.length; index++) {
        products+='<div class="product">'
        products+='<span id="'+ cookies.wishlist[index].item_id+'"></span>'
        products+='</div>'
      //  console.log(cookies.wishlist[index].item_id)
      }
      
      document.getElementById('products').innerHTML=products
      GetProductInfo()
    }
     )
     function GetProductInfo() {
      for (let index = 0; index < cookies.wishlist.length; index++) {
       // console.log(cookies.wishlist[index].item_id)
        axios.get(
          'http://localhost:8080/ecommerce/books/details?book_id='+cookies.wishlist[index].item_id,
          ).then(response=>{
            var row=' '
            row +='<div class="product_img_div"><img class="productimg" id="'+response.data[0].book_id+'_image" style="width:100%;height:100%;"/></div>'
            row +='<div class="product_info">'+response.data[0].book_title+'</div>'
            row+='</br>'
         
          //console.log(response.data[0].book_id)
          document.getElementById(response.data[0].book_id).innerHTML=row
          document.getElementById(response.data[0].book_id+'_image').src=require("../Images/"+response.data[0].book_title+".jpg")
          //console.log(response.data[0].book_id+'_image')

          }
          )
        
      }
     
       
     }
     
     

    return (
        <div>
          <Header/>
      
      
          
          <h1>Wishlist</h1>
          <div className='productsdiv'>
            <span id='products'></span>
          

          </div>
    
    
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
    
          <Footer/>
        </div>
        
      )
    }
    
    