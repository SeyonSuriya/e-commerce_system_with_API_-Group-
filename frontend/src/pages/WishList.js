import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/wishlist.css';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';

export default function WishList() {
  
  const [cookies, setCookie] = useCookies(['user']);
  var wishlist=[]
  

  if (cookies.userid<1||cookies.userid==='') {
    window.location.href = "/login";
  }

function GetWishedItems(){
  axios.post(
    'http://localhost:8080/ecommerce/wishes?userid='+cookies.userid,
    ).then(response=>{
      //console.log(response.data)
      setCookie('wishlist', response.data, { path: '/wishlist'});
      var products=' '
      for (let index = 0; index < response.data.length; index++) {
        products+='<div className={Style["product"]}>'
        products+='<span id="'+ response.data[index].item_id+'"></span>'
        products+='</div>'
      //  console.log(cookies.wishlist[index].item_id)
      }
      if (response.data.length===0) {
        products+='<div class="wishlist_empty_div">'
        products+='<div class="empty_cart_message">Your Wishlist is Empty</br><a href="/" class="home_button"><button class="home_page_button">Homepage</button></a></div></tbody>'

        products+='</div>'
      }
      document.getElementById('products').innerHTML=products
      GetProductInfo(response.data)
    }
     )
  }
  GetWishedItems()

     function GetProductInfo(wisheditems) {
      for (let index = 0; index < wisheditems.length; index++) {
       // console.log(cookies.wishlist[index].item_id)
        axios.get(
          'http://localhost:8080/ecommerce/books/details?book_id='+wisheditems[index].item_id,
          ).then(response=>{
            var row=' '
            row +='<div class="product_img_div"><img class="productimg" id="'+response.data[0].book_id+'_image" style="width:100%;height:100%;"/></div>'
            row+='<div class="wishlistdiv">'
            row+='<br><br><br><button class="remove_button" id="'+response.data[0].book_id+'_remove">Remove</button><br><br>'
            if (response.data[0].num_of_units>0) {
            row+='<button class="addtocart_button" id="'+response.data[0].book_id+'_addtocart">Add to cart</button>'
            }else{
              row+='<span>out of stock</span>'
            }
            row+='</div>'
            row +='<div class="product_info">'
            row +='<p class="title">'
            row +=response.data[0].book_title+'</p>'
            row +='By '+response.data[0].author+'</br></br>'
            row+='<p class="description">'
            row +=response.data[0].long_description+'</p></br>'
            row +='<p class="price">'
            row +='Price : US $'+response.data[0].book_price+'</p></br>'
            row+='</div>'
            row+='</br>'



         
          //console.log(response.data[0].book_id)
          document.getElementById(response.data[0].book_id).innerHTML=row
          document.getElementById(response.data[0].book_id+'_image').src=require("../Images/"+response.data[0].book_title+".jpg")
          document.getElementById(wisheditems[index].item_id+'_remove').onclick = function () {
            RemoveFromWishlist(wisheditems[index].item_id)
           }
           if (response.data[0].num_of_units>0) {
            document.getElementById(wisheditems[index].item_id+'_addtocart').onclick = function () {
              AddToCart(wisheditems[index].item_id)
             }
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
          GetWishedItems()
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
      
      
          
          <div class="head"><h1>Wishlist</h1></div>

          <div class='productsdiv'>
            <span id='products'></span>
          </div>
          &nbsp;
    
          
          <a href='/wishlist' id="wishlist" > </a>
          <Footer/>
        </div>
        
      )
    }
    
    