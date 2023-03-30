import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import "./cart.css";

export default function Cart() {
  const [cookies, setCookie] = useCookies(['user']);


  // Getting Product Info and creating a row with product data

  function Addproduct(book_id){
    var row=' '
    axios.get(
      'http://localhost:8080/ecommerce/books/details?book_id='+book_id,
      // eslint-disable-next-line no-loop-func
      ).then(response=>{
        //console.log(tmpproduct)
           var tmpproduct=response.data
           row+='<tr><td ><div class="product"><div class="product_selecter_div"><input type="checkbox" id="'+tmpproduct[0].book_id+'_select"" ></div>'
           //console.log(tmpproduct[0].book_title+'_wish_image')
           //console.log(tmpproduct[0].book_id)
           row+='<div class="product_image_div"><img class="product_image"  style="width:100%;height:100%;" id="'+tmpproduct[0].book_id+'_image" /></div><span id='+tmpproduct[0].book_id+'></span>'
           row+='<div class="productInfo"><div>'+tmpproduct[0].book_title+'</div></br><div class="long_description">'+tmpproduct[0].long_description+'</div>'
           row+=' <div>US $'+tmpproduct[0].book_price+' </div></div>'
           row+='<div class="product_functions">'
           row+='<div></br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+tmpproduct[0].book_id+'_wish_image" style="width:24px;height:24px; "  />&nbsp;&nbsp;'
           row+='<img id="'+tmpproduct[0].book_id+'_delete_image" class="delete_image" style="width:24px;height:26px;margin: 0 auto;" /></div><br/></br>'
           row+='<div id="change_units" class="unitsdiv">'
           row+='&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+tmpproduct[0].book_id+'_remove" class="minus_button" style="width:25px;height:25px;margin: 0 auto;"  />'
           
           row+='&nbsp;&nbsp;&nbsp;&nbsp;<span id="units" class="units">1</span>&nbsp;&nbsp;'
           row+='<img id="'+tmpproduct[0].book_id+'_add" class="add_button" style="width:40px;height:24px;" onClick={addUnits}/></div>'
           row+='<br/>'
           row+='</div></div></td></tr>'
           
         //  console.log(row)
        document.getElementById(book_id).innerHTML=row
       // console.log(tmpproduct[0].book_id)
        document.getElementById(tmpproduct[0].book_id+'_image').src=require("../Images/"+tmpproduct[0].book_title+".jpg")
        document.getElementById(tmpproduct[0].book_id+'_remove').src=require("../Images/-.jpeg")
        document.getElementById(tmpproduct[0].book_id+'_add').src=require("../Images/+.jpeg")
        document.getElementById(tmpproduct[0].book_id+'_delete_image').src=require("../Images/delete.jpeg")
       // document.getElementById(tmpproduct[0].book_id+'_wish_image').src=require("../Images/delete.jpeg")
       changeWishListImage(tmpproduct[0].book_id)
       // Adding onclick function to wish images
       document.getElementById(tmpproduct[0].book_id+'_wish_image').onclick = function () {
        WishListHandler(tmpproduct[0].book_id)
       }
       // Adding onClick function to delete button
       document.getElementById(tmpproduct[0].book_id+'_delete_image').onclick = function () {
        // Add Delete from cart function
        DeleteProduct(tmpproduct[0].book_id)
       }
      }
      
      )
  }
  function ShowProductsInCart() {
    

    axios.post(
      'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
      ).then(response=>{
           if (response.data.length>0) {
            
            setCookie('cart', response.data, { path: '/cart'});
            var table='<tbody>'
            for (let index = 0; index < response.data.length; index++) {
              //console.log(cart[index].item_id)
              table+='<span id="'+cookies.cart[index].item_id+'"></span>'
              Addproduct(cookies.cart[index].item_id)
            }
            
            document.getElementById('products').innerHTML=table+'</tbody>'

           }
          }
  )
}
ShowProductsInCart()

  // Function for wish list add/drop feature including wishlist image changing
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
      

// Delete From Cart Function
    function DeleteProduct(book_id) {
      axios.post(
        'http://localhost:8080/ecommerce/cart/remove?book_id='+book_id+'&userid='+cookies.userid,
        ).then(response=>{
          ShowProductsInCart()
         }
        )
    }




    return (
     
      
      <div className="caption left-align">
        
        <Header/>
      
        
  <h3>Cart</h3>
<span id="temp"></span>
  <span id='products'></span>
 
   
   

    

 </div>
        
      )
    }
    
    