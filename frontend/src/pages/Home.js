import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {BsSearch} from 'react-icons/bs';
import "./homestyle.css";
import { Link } from 'react-router-dom';
import video03 from '../assests/video 02.mp4';
import axios from 'axios';
import { useCookies } from 'react-cookie';
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


   axios.post(
      'http://localhost:8080/ecommerce/store?category='
      ).then(response=>{
          var products=response.data
          var allproducts=' '
          for (let index = 0; index < 15; index++) {
            if ((index%5===0)&(index!==0)) {
              allproducts+='</br>'
            }
            allproducts+='<div class="product" >'
            allproducts+='<div id="product_'+products[index].book_id+'"><img class="productImg" id="'+products[index].book_id+'_image" alt="product Image" /></div>'
            allproducts+='<div class="NamePrice"><span class="book_title">'+products[index].book_title+'</span></br>'
            allproducts+='<span class="book_price">US $'+products[index].book_price+'</span></div>'
            allproducts+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+products[index].book_id+'_wish_image" style="width:24px;height:24px; "  />&nbsp;&nbsp;'
            if (products[index].num_of_units>0) {
              allproducts+='<button id="'+products[index].book_id+'_cart_button">Add to Cart</button>'
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
           document.getElementById(products[index].book_id+'_cart_button').onclick = function () {
            AddtoCart(products[index].book_id)
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
    
   
   
     
   
  return (
    <div className='homecontainer'>
      <Header/>

      <div>
      <div className="video-container">
         <div classname='overLay'>
      <video src={video03} autoPlay loop muted/></div>
         <div className="video-content">
        
                <div className="input-group">
                <input type="text" 
                className="form-control " 
                placeholder="Search Product Here..." 
                aria-label="Search Product Here..." 
                aria-describedby="basic-addon2" />

                <span className="input-group-text" id="basic-addon2">
                 <BsSearch className='searchicon'/>
                </span>
                </div>
              
         </div>
      </div>
      </div>

      <div className='latest-line'>
      <h1 className='latest-name'>
      Latest Products</h1><hr />
      </div>

   <div className="dropdown01">
                 <button className="btn btn-secondary dropdown01-toggle bg-transparent" 
                  type="button" data-bs-toggle="dropdown" 
                   aria-expanded="false">
                    Categories
                      </button>
                      
   <ul class="dropdown-menu">
  
    <li><a className="dropdown-item" href="Store?query=Arts&Music">Arts & Music</a></li>
    <li><a className="dropdown-item" href="Store?query=Biographs">Biographs</a></li>
    <li><a className="dropdown-item" href="Store?query=Business">Business</a></li>
    <li><a className="dropdown-item" href="Store?query=Comics">Comics</a></li>
    <li><a className="dropdown-item" href="Store?query=Computer&Tech">Computer & Tech</a></li>
    <li><a className="dropdown-item" href="Store?query=Cooking">Cooking</a></li>
    <li><a className="dropdown-item" href="Store?query=Education">Education</a></li>
    <li><a className="dropdown-item" href="Store?query=Entertainment">Entertainment</a></li>
    <li><a className="dropdown-item" href="Store?query=Health&Fitness">Health & Fitness</a></li>
    <li><a className="dropdown-item" href="Store?query=History">History</a></li>
    <li><a className="dropdown-item" href="Store?query=Hobbies&Craft">Hobbies & Craft</a></li>
    <li><a className="dropdown-item" href="Store?query=Home&Garden">Home & Garden</a></li>
    <li><a className="dropdown-item" href="Store?query=Kids">Kids</a></li>
    <li><a className="dropdown-item" href="Store?query=Medical">Medical</a></li>
    <li><a className="dropdown-item" href="Store?query=Mysteries">Mysteries</a></li>
    <li><a className="dropdown-item" href="Store?query=Parenting">Parenting</a></li>
    <li><a className="dropdown-item" href="Store?query=Religion">Religion</a></li>
    <li><a className="dropdown-item" href="Store?query=Romance">Romance</a></li>
    <li><a className="dropdown-item" href="Store?query=Science&Math">Science & Math</a></li>
    <li><a className="dropdown-item" href="Store?query=SocialScience">Social Science</a></li>
    <li><a className="dropdown-item" href="Store?query=Sports">Sports</a></li>
    <li><a className="dropdown-item" href="Store?query=Travel">Travel</a></li>
    <li><a className="dropdown-item" href="Store?query=TrueCrime">True Crime</a></li>
    <li><a className="dropdown-item" href="Store?query=Westerns">Westerns</a></li>
  </ul>

</div>

      
      
   <div className='col-md-3'>
      <div className='card '>
      
      <img src={require("../Images/1.jpg")} className='card-img-top'/>
      <div class='card-body'>
         <h5 class='card-title'>Kite runner</h5>
         <p class='card-text'>$10.00</p>
         <button className='home-button'>
          Buy Now
         </button>
      </div>

      <img src={require("../Images/1.jpg")} className='card-img-top'/>
      <div class='card-body'>
         <h5 class='card-title'>Kite runner</h5>
         <p class='card-text'>$10.00</p>
         <button className='home-button'>
          Buy Now
         </button>
      </div>

      <img src={require("../Images/1.jpg")} className='card-img-top'/>
      <div class='card-body'>
         <h5 class='card-title'>Kite runner</h5>
         <p class='card-text'>$10.00</p>
         <button className='home-button'>
          Buy Now
         </button>
      </div>

      <img src={require("../Images/1.jpg")} className='card-img-top'/>
      <div class='card-body'>
         <h5 class='card-title'>Kite runner</h5>
         <p class='card-text'>$10.00</p>
         <button className='home-button'>
          Buy Now
         </button>
      </div>
 
      </div>

    
      </div>
      
      

    </div>
    
  )
}

























