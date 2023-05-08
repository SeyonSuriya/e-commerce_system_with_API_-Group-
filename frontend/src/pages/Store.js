import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import "../components/store.css"


  

export default function Store() {
  const [cookies, setCookie] = useCookies(['user']);
  if (!cookies.userid>0) {
    
    setCookie('userid', 0, { path: '/'});

  }

  const queryParameters = new URLSearchParams(window.location.search)
  const category = queryParameters.get("query")
  const keyword = queryParameters.get("keyword")
  var books=' '
  
  if (keyword!==null) {
  
    books='http://localhost:8080/ecommerce/search?keyword='+keyword
  }else{
    books='http://localhost:8080/ecommerce/store?category='+category
  }
  axios.post(
    books,
    ).then(response=>{
        var products=response.data
        var allproducts=' '
        if (products.length>0) {
          
      
        for (let index = 0; index < products.length; index++) {
          if ((index%4===0)&(index!==0)) {
            allproducts+='</br>'
          }
          allproducts+='<div id="product">'
          allproducts+='<div id="product_'+products[index].book_id+'"><img class="productImg" id="'+products[index].book_id+'_image" alt="product Image" /></div>'
          allproducts+='<div class="NamePrice"><span class="book_title">'+products[index].book_title+'</span></br>'
          allproducts+='<span class="book_price"><p class="price">US $'+products[index].book_price+'</p></span></div>'
          allproducts+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+products[index].book_id+'_wish_image" style="width:24px;height:24px; "  />&nbsp;&nbsp;'
          if (products[index].num_of_units>0) {
            allproducts+='<button className="category_buttons" class="Addtocart" id="'+products[index].book_id+'_cart_button">Add to Cart</button>'
          }else{
            allproducts+='Out of Stock'
          }
          allproducts+='</div>'
        }
        document.getElementById('Addproducts').innerHTML=allproducts
        for (let index = 0; index < products.length; index++) {
        document.getElementById(products[index].book_id+'_image').src=require("../Images/"+products[index].book_title+".jpg")
        document.getElementById(products[index].book_id+'_wish_image').onclick = function () {
          WishListHandler(products[index].book_id)
         } 
         changeWishListImage(products[index].book_id)
         if (products[index].num_of_units>0) {
         document.getElementById(products[index].book_id+'_cart_button').onclick = function () {
          AddtoCart(products[index].book_id)
        }}
        document.getElementById('product_'+products[index].book_id).onclick = function () {
          window.location.href = "/product?bookid="+products[index].book_id;
        }
      }
    }else{
      document.getElementById('Addproducts').innerHTML="<span class='no_products'>Sorry no product avilable Try different category</span>"

    
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
    if (cookies.userid<1||cookies.userid==='') {
      window.location.href = "/login";
    }else{
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
            alert('Book added to wishlist successfully')
          }
            )}
     }
      )
    }
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
  











  return (
    
     <div className='MainDiv' >
          <Header/>
        <div className='categories_div' id='categories'>
       
    <button className='categories'><a className="category" href="Store?query=Music">Music</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Biographs">Biographs</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Business">Business</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Comics">Comics</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Computer">Computer & Tech</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Cooking">Cooking</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Education">Education</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Entertainment">Entertainment</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Health&Fitness">Health & Fitness</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=History">History</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Hobbies&Craft">Hobbies & Craft</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Home&Garden">Home & Garden</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Kids">Kids</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Medical">Medical</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Mysteries">Mysteries</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Parenting">Parenting</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Religion">Religion</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Romance">Romance</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Science&Math">Science & Math</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=SocialScience">Social Science</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Sports">Sports</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Travel">Travel</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=TrueCrime">True Crime</a></button><br/>
    <button className='categories'><a className="category" href="Store?query=Westerns">Westerns</a></button><br/>


        </div>
      
     <div className='productsDiv'>
      <span id='Addproducts'></span>
     </div>
    
    <br/> <br/> <br/> <br/> <br/> <br/> 
    <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/>
    
        </div>
        
      )
    }
    
    