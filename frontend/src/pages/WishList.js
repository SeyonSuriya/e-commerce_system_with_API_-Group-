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
      if (cookies.wishlist.length===0) {
        products+='<div class="product">'
        products+='No Books in your wishlist'
        products+='</div>'
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
            row+='<table class="table"><tr>'
            row +='<div class="product_img_div"><img class="productimg" id="'+response.data[0].book_id+'_image" style="width:100%;height:100%;"/></div>'
            row+='<div class="wishlistdiv">'
            row+='<br><br><br><button class="remove_button" id="'+response.data[0].book_id+'_remove">Remove</button><br><br>'
            row+='<button class="addtocart_button" id="'+response.data[0].book_id+'_addtocart">Add to cart</button>'
            
            row+='</div>'
            row +='<div class="product_info">'
            row +='<div class="title">'
            row +=response.data[0].book_title+'</div></br>'
            row +='By '+response.data[0].author+'</br>'
            row +=response.data[0].long_description+'</br><br>'
            row +='<div class="price">'
            row +='Price : US $'+response.data[0].book_price+'</div></br>'
            row+='</div>'
            row+='</tr></table>'
            row+='</br>'



         
          //console.log(response.data[0].book_id)
          document.getElementById(response.data[0].book_id).innerHTML=row
          document.getElementById(response.data[0].book_id+'_image').src=require("../Images/"+response.data[0].book_title+".jpg")
          document.getElementById(cookies.wishlist[index].item_id+'_remove').onclick = function () {
            RemoveFromWishlist(cookies.wishlist[index].item_id)
           }
           document.getElementById(cookies.wishlist[index].item_id+'_addtocart').onclick = function () {
            AddToCart(cookies.wishlist[index].item_id)
           }
          //console.log(response.data[0].book_id+'_image')

          }
          )
          
        
      }
     
       
     }
     function RemoveFromWishlist(book_id) {
      if(window.confirm("Are you sure to remove this book from your Wishlist?")){
      console.log('clicked')
      axios.post(
        'http://localhost:8080/ecommerce/books/removefromwishlist?book_id='+book_id+'&userid='+cookies.userid,
        ).then(response=>{
          
         }
          )
          GetProductInfo()
          setCookie('wishlist', [], { path: '/wishlist'});
          document.getElementById("wishlist").click(); 
        }
      
     }
     function AddToCart(book_id){
      if(window.confirm("Do you want add this item to cart?")){

      axios.post(
        'http://localhost:8080/ecommerce/books/addtocart?book_id='+book_id+'&units='+1+'&userid='+cookies.userid,
        ).then(response=>{
          // When the user clicks on div, open the popup
           alert('Book added to cart successfully')
           // var popup = document.getElementById("myPopup");
           // popup.classList.toggle("show");

         }
          )
        }
     }
     
     

    return (
        <div>
          <Header/>
      
      
          
          <h1>Wishlist</h1>

          <div class='productsdiv'>
            <span id='products'></span>
          </div>
    
    
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
          <a href='/wishlist' id="wishlist" > </a>
          <Footer/>
        </div>
        
      )
    }
    
    