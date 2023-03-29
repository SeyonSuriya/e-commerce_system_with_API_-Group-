import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import "./cart.css";

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
           
           row+='<tr><td ><div class="product"><div class="product_selecter_div"><input type="checkbox" id="'+tmpproduct[0].book_title+'_select"" ></div>'
           row+='<div class="product_image_div"><img class="product_image" style="width:100%;height:100%;" id="'+tmpproduct[0].book_title+'" /></div>'
           row+='<div class="productInfo"><div>'+tmpproduct[0].book_title+'</div></br><div class="long_description">'+tmpproduct[0].long_description+'</div>'
           row+=' <div>US $'+tmpproduct[0].book_price+' </div></div>'
           row+='<div class="product_functions">'
           row+='<div></br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id="'+tmpproduct[0].book_title+'_wish_image" style="width:24px;height:24px;"  onClick={WishListHandler}/>&nbsp;&nbsp;'
           row+='<img id="'+tmpproduct[0].book_title+'_delete_image" class="delete_image" style="width:24px;height:26px;margin: 0 auto;" onClick={WishListHandler}/></div><br/></br>'
           row+='<div id="change_units" class="unitsdiv">'
           row+='&nbsp;&nbsp;&nbsp;&nbsp;<img id="'+tmpproduct[0].book_title+'_remove" class="minus_button" style="width:25px;height:25px;margin: 0 auto;"  onClick={RemoveUnits}/>'
           row+='&nbsp;&nbsp;&nbsp;&nbsp;<span id="units" class="units">1</span>&nbsp;&nbsp;'
           row+='<img id="'+tmpproduct[0].book_title+'_add" class="add_button" style="width:40px;height:24px;" onClick={addUnits}/></div>'
           row+='<br/>'
           row+='</div></div></td></tr>'
           
           console.log(row)
        document.getElementById(book_id).innerHTML=row
        console.log(tmpproduct[0].book_id)
        document.getElementById(tmpproduct[0].book_title).src=require("../Images/"+tmpproduct[0].book_title+".jpg")
        document.getElementById(tmpproduct[0].book_title+'_remove').src=require("../Images/-.jpeg")
        document.getElementById(tmpproduct[0].book_title+'_add').src=require("../Images/+.jpeg")
        document.getElementById(tmpproduct[0].book_title+'_wish_image').src=require("../Images/heart1.jpg")
        document.getElementById(tmpproduct[0].book_title+'_delete_image').src=require("../Images/delete.jpeg")

      }
      
      )
  }

 
    axios.post(
      'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
      ).then(response=>{
           if (response.data.length>0) {
            var cart=response.data
            var table='<tbody>'
            for (let index = 0; index < response.data.length; index++) {
              //console.log(cart[index].item_id)
              table+='<span id="'+cart[index].item_id+'"></span>'
              Addtoduct(cart[index].item_id)
            }
            
            document.getElementById('products').innerHTML=table+'</tbody>'
            document.getElementById(2).innerHTML="sad"
           }
          }
  )
        

//console.log(cartproducts)




    return (
     
      
      <div className="caption left-align">
        
        <Header/>
      
        
  <h3>Upcoming events</h3>
  <table className="productsTable">

  </table>
  <span id='products'></span>
 
   
   

    
 </div>
        
      )
    }
    
    