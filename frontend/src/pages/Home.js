import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {BsSearch} from 'react-icons/bs';
import "./homestyle.css";
import { Link } from 'react-router-dom';
import video03 from '../assests/video 02.mp4';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import  { useState } from 'react'
// import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';



const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '570px'
}










export default function Home() {

   const [cookies, setCookie] = useCookies(['user']);
   if (cookies.userid>1) {
    console.log('$$$')
   // window.location.href = "/login";
  }


   axios.post(
      'http://localhost:8080/ecommerce/store?category='
      ).then(response=>{
          var products=response.data
          var allproducts=' '
          for (let index = 0; index < 12; index++) {
            if ((index%5===0)&(index!==0)) {
              allproducts+='</br>'
            }
            allproducts+='&nbsp;&nbsp;&nbsp;<div id="product" >'
            allproducts+='<div id="product_'+products[index].book_id+'"><img class="productImg" id="'+products[index].book_id+'_image" alt="product Image" /></div>'
            allproducts+='<div class="NamePrice"><span class="book_title">'+products[index].book_title+'</span></br>'
            allproducts+='<span class="book_price">US $'+products[index].book_price+'</span></div>'
            allproducts+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+products[index].book_id+'_wish_image" style="width:24px;height:24px; "  />&nbsp;&nbsp;'
            if (products[index].num_of_units>0) {
              allproducts+='<button class="Addtocartbut" id="'+products[index].book_id+'_cart_button">Add to Cart</button>'
            }else{
              allproducts+='Out of Stock'
            }
            allproducts+='</div>'
          }
          document.getElementById('Addproducts').innerHTML=allproducts
          for (let index = 0; index < 12; index++) {
           
          document.getElementById(products[index].book_id+'_image').src=require("../Images/"+products[index].book_title+".jpg")
          document.getElementById(products[index].book_id+'_wish_image').onclick = function () {
            WishListHandler(products[index].book_id)
           } 
           changeWishListImage(products[index].book_id)
           if (products[index].num_of_units>0) {
           document.getElementById(products[index].book_id+'_cart_button').onclick = function () {
            AddtoCart(products[index].book_id)
          }
        }
          document.getElementById('product_'+products[index].book_id).onclick = function () {
            window.location.href = "/product?bookid="+products[index].book_id;
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
          if(window.confirm("Are you sure to remove this book from wishlist?")){
          axios.post(
            'http://localhost:8080/ecommerce/books/removefromwishlist?book_id='+book_id+'&userid='+cookies.userid,
            ).then(response=>{
              document.getElementById(book_id+'_wish_image').src=require("../Images/heart1.png")
             }
              )
            }
        }else{
          
  if (cookies.userid<1||cookies.userid==='') {
    window.location.href = "/login";
  }
          axios.post(
            'http://localhost:8080/ecommerce/books/addtowishlist?book_id='+book_id+'&userid='+cookies.userid,
            ).then(response=>{
              document.getElementById(book_id+'_wish_image').src=require("../Images/heart2.png")
              alert('Book added to wishlist successfully')
            }
              )}
       }
        )
      }
   
      // Add to cart Function
      function AddtoCart(book_id) {
        if (cookies.userid<1||cookies.userid==='') {
          window.location.href = "/login";
        }else{
        if(window.confirm("Are you sure to Add this book to your cart?")){
        axios.post(
          'http://localhost:8080/ecommerce/books/addtocart?book_id='+book_id+'&units='+1+'&userid='+cookies.userid,
          ).then(response=>{
            // When the user clicks on div, open the popup
            alert('Book added to Cart successfully')
   
              var popup = document.getElementById("myPopup");
              popup.classList.toggle("show");

   
           }
            )
          }
        }
       }
  const [SearchKeyword,setSearchKeyword]=useState(' ');
   function SearchBarHandler() {
    if (SearchKeyword!=="") {

      window.location.href = "/store?keyword="+SearchKeyword;
    }else{
    
    }

    
   }
   
   
  return (
    <div className='homecontainer'>
      <Header/>

      <div>
      <div className="video-container">
         <div classname='overLay'>
      <video src={video03} autoPlay loop muted/></div>
         <div className="video-content">
        
               <div className="input-group">
                <input type="text" id="searchbar"
                className="form-control" 
                placeholder="Search Product Here..." 
                aria-label="Search Product Here..." 
                aria-describedby="basic-addon2" 
                onChange={(e)=>setSearchKeyword(e.target.value)}  />

                <span className="input-group-text" id="basic-addon2">
                 <BsSearch className='searchicon' onClick={(event)=>SearchBarHandler()}/>
                </span>
                </div>
              
         </div>
      </div>
      </div>

      <h3>Recommended Books</h3>
      <div id='productDiv'>
      <span className="Addproducts" id='Addproducts'></span>
      </div>

      &nbsp;
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <Footer/>

    </div>
    
  )
}







