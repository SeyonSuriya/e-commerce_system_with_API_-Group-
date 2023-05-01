import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';



import "./cart.css";

export default function Cart() {
  const [cookies, setCookie] = useCookies(['user']);
  setCookie('pricearray', [], { path: '/cart'});
  if (cookies.userid<1) {
    window.location.href = "/login";
  }
  

  // Getting Product Info and creating a row with product data

  function Addproduct(book_id,index,cartid,cart){
    var row=' '
    axios.get(
      'http://localhost:8080/ecommerce/books/details?book_id='+book_id,
      // eslint-disable-next-line no-loop-func
      ).then(response=>{
        //console.log(tmpproduct)
           var tmpproduct=response.data
           cookies.pricearray[index]=tmpproduct[0].book_price
           //console.log(cartid)
           if (response.data[0].num_of_units>0) {
            row+='<table class="productrow"><tr style="border-color: 1px solid #11324d;"><td ><div class="product_selecter_div"><input type="checkbox" name="chk" id="'+cartid+'" ></div>'
           }else{
            row+='<table class="productrow"><tr style="border-color: 1px solid #11324d;"><td ><div class="product_selecter_div"></div>'

           }
           //console.log(tmpproduct[0].book_title+'_wish_image')
           //console.log(tmpproduct[0].book_id)
           row+='<div class="product_image_div"><img class="product_image"  style="width:100%;height:100%;" id="'+tmpproduct[0].book_id+'_image" /></div><span id='+tmpproduct[0].book_id+'></span>'
           row+='<div class="productInfo"><div style="font-size:15px"><b>'+tmpproduct[0].book_title+'</b></div></br><div class="long_description">'+tmpproduct[0].long_description+'</div><br>'
           row+=' <div style="; bottom;font-size: 18px"><b>US $'+tmpproduct[0].book_price+' </b></div></div>'
           row+='<div class="product_functions">'
           row+='<div></br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+tmpproduct[0].book_id+'_wish_image" style="width:24px;height:24px; "  />&nbsp;&nbsp;'
           row+='<img id="'+tmpproduct[0].book_id+'_delete_image" class="delete_image" style="width:24px;height:26px;margin: 0 auto;" /></div><br/></br>'
           row+='<div id="change_units" class="unitsdiv">'
           row+='&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+tmpproduct[0].book_id+'_remove" class="minus_button" style="width:25px;height:25px;margin: 0 auto;"  />'
           if (response.data[0].num_of_units>=cart[index].quantity) {
           row+='&nbsp;&nbsp;&nbsp;&nbsp;<span id="'+tmpproduct[0].book_id+'_units" class="units">'+cart[index].quantity+'</span>&nbsp;&nbsp;'
           }else{
            axios.post(
              'http://localhost:8080/ecommerce/cart/updateunits?item_id='+tmpproduct[0].book_id+'&units='+1+'&userid='+cookies.userid,
              ).then(response=>{
           
               }
              )
            row+='&nbsp;&nbsp;&nbsp;&nbsp;<span id="'+tmpproduct[0].book_id+'_units" class="units">'+1+'</span>&nbsp;&nbsp;'
           }
           row+='<img id="'+tmpproduct[0].book_id+'_add" class="add_button" style="width:40px;height:24px;" onClick={addUnits}/>'
           if (response.data[0].num_of_units===0) {
            row+='Item is out of stock'
           }
           row+='</div>'
           row+='<br>'
           row+='</div></div></td></tr></table>'
           
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
        
        DeleteProduct(tmpproduct[0].book_id)
          

       }
       // Adding AddUnits and Deduct units in cart onclick functions
       document.getElementById(tmpproduct[0].book_id+'_add').onclick = function () {
        addUnits(tmpproduct[0].num_of_units,index,tmpproduct[0].book_id,cart)
       }
       document.getElementById(tmpproduct[0].book_id+'_remove').onclick = function () {
        RemoveUnits(index,tmpproduct[0].book_id,cart)
       }
       document.getElementById(cartid).onclick = function () {
        Select(cart)
        
       }

      }
      
      )
  }
  var cart=[]
  function ShowProductsInCart() {
    
    axios.post(
      'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
      ).then(response=>{
           if (response.data.length>0) {
            document.getElementById('all_items_selector').innerHTML='<input type="checkbox" name="all_items_selector"> &nbsp;&nbsp;Select all Items</br>'
            setCookie('cart', response.data, { path: '/cart'});
            cart=response.data
            var table='</br></br><tbody>'
            for (let index = 0; index < response.data.length; index++) {
              console.log(cart[index].item_id)
              table+='<span id="'+response.data[index].item_id+'"></span>'
              Addproduct(response.data[index].item_id,index,response.data[index].id,response.data)
            }
            document.getElementById('products').innerHTML=table+'</tbody>'
            document.getElementById('num_of_item_in_cart').innerHTML=response.data.length
           }else{
            document.getElementById('all_items_selector').innerHTML=' '
            document.getElementById('num_of_item_in_cart').innerHTML=0
            document.getElementById('products').innerHTML='<div class="product">Your Cart is Empty<a href="/"><button>Homepage</button></a></div></tbody>'

           }
           document.getElementById('all_items_selector').onclick = function () {
            AllItemSelector(cart)
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
          if(window.confirm("Are you sure to remove this book from wishlist?")){

          axios.post(
            'http://localhost:8080/ecommerce/books/removefromwishlist?book_id='+book_id+'&userid='+cookies.userid,
            ).then(response=>{
              document.getElementById(book_id+'_wish_image').src=require("../Images/heart1.png")
             }
              )
            }
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
      if(window.confirm("Are you sure to remove this book from cart?")){
        axios.post(
          'http://localhost:8080/ecommerce/cart/remove?book_id='+book_id+'&userid='+cookies.userid,
          ).then(response=>{
            ShowProductsInCart()
           }
          )
      }else{
      }


     
    }

// Units Handling Functions
        function addUnits(available_units,cartid,book_id,cart) {
            if (available_units>cookies.cart[cartid].quantity) {
              cookies.cart[cartid].quantity+=1
              cart[cartid].quantity+=1
             
             axios.post(
              'http://localhost:8080/ecommerce/books/addtocart?book_id='+book_id+'&units='+1+'&userid='+cookies.userid,
              ).then(response=>{
               // ShowProductsInCart()
               }
              )
              ChangeTotal(cart)
            document.getElementById(book_id+'_units').innerHTML=cookies.cart[cartid].quantity
            }
        }
        function RemoveUnits(cartid,book_id,cart) {
         if (cookies.cart[cartid].quantity!==1) {
          cookies.cart[cartid].quantity-=1
          cart[cartid].quantity-=1
          
           axios.post(
            'http://localhost:8080/ecommerce/cart/updateunits?item_id='+book_id+'&units='+cookies.cart[cartid].quantity+'&userid='+cookies.userid,
            ).then(response=>{
             // ShowProductsInCart()
             }
            )
            ChangeTotal(cart)
           document.getElementById(book_id+'_units').innerHTML=cookies.cart[cartid].quantity
         }
        }
        var selectors=document.getElementsByName('chk'); 
        // All Item Selector
        function AllItemSelector(cart) {
          console.log(cart)
          
         var all_items_selector=document.getElementsByName('all_items_selector')[0]
           if (all_items_selector.checked===false) {
            document.getElementsByName('all_items_selector').checked=true
           for(var i=0; i<selectors.length; i++){  
            if(selectors[i].type==='checkbox')  
            selectors[i].checked=false;  
          }
          ChangeTotal(cart)
         }else{
          document.getElementsByName('all_items_selector').checked=false
          for( i=0; i<selectors.length; i++){  
            if(selectors[i].type==='checkbox')  
            selectors[i].checked=true; 
         }
         ChangeTotal(cart)
          }
        }
       
        // Select Item
        function Select(cart) {
          
          // console.log(selectors)
          for(var i=0; i<selectors.length; i++){  
              if (selectors[i].checked===false) {
                document.getElementsByName('all_items_selector')[0].checked=false
                ChangeTotal(cart) 
                break;
              }  console.log(cart)
              ChangeTotal(cart)            
            document.getElementsByName('all_items_selector')[0].checked=true

          }
        }
        
        function ChangeTotal(cart) {
          var Total = 0
          
          console.log(cart)
          //setCookie('selected', [], { path: '/cart'});
          for(var i=0; i<selectors.length; i++){  
            if (selectors[i].checked===true) {
             
              console.log(cart)
              Total+=cookies.cart[i].quantity*cookies.pricearray[i]
            } 
        }
        document.getElementById('Total').innerHTML=Total
        
        //console.log(cookies.selected)
          
        }
        function CheckSelections() {
          var selected=[]
          var x=0
          for(var i=0; i<selectors.length; i++){  
            if (selectors[i].checked===true) {
              selected[x]=cookies.cart[i].id
              x++
            } 
        }
          if(x>0) {
            //console.log(cookies.selected)
            setCookie('selectedBooks', selected, { path: '/checkout'});
            document.getElementById("Checkoutpage").click();        
        }else{
          alert('Please select books to checkout')
        }
        }




    return (
      <div className="caption left-align">
        <Header/>
    <div className='Cartdiv'>
        
      <h3><b>Shopping Cart(<span id="num_of_item_in_cart"/>)</b></h3>
      <span id="all_items_selector" />
    </div>  

    <div>
      <table className='maintable'>
        <tr>
          <td className='right'><span id='products'></span></td>
          <td className='left'>
            <div className='summarydiv'>
              <p id="summary"><b>Summary</b></p><br></br>
              <p className="total">Total :US $ <span className="Total" id="Total"></span></p><br></br><br></br>
              <div className="checkout_button"><button id='checkout' onClick={CheckSelections}><b>Checkout</b></button></div>
   
              <a href='/checkout' id="Checkoutpage" > </a>
            </div>
          </td>
        </tr>
      </table>
    </div>

    
 
    
   

 </div>
        
      )
    }
    
    