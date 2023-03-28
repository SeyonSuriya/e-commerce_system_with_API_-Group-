import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import "../components/product_page.css"
import Loginimg from "../assests/Login img.jpg";
import { Cookies, useCookies } from 'react-cookie';



export default function Product() {
  const [cookies, setCookie] = useCookies(['user']);
  // Remove this Set Cookie after because this will be created form registration page
  setCookie('userid', '1', { path: '/'});
    
    const queryParameters = new URLSearchParams(window.location.search)
    const book_id = queryParameters.get("bookid")
    var units=1
    var available_units=0
    

    // Checking if the product in the wish list or not and select the heart image
    function changeWishListImage() {
      axios.post(
        'http://localhost:8080/ecommerce/books/checkwishes?book_id='+book_id+'&userid='+cookies.userid,
        ).then(response=>{
          if (response.data==='wished') {
            document.getElementById('wish_list_image').src=require("../Images/heart2.png")
            document.getElementById('wish_list_image').value=1
          }else{
            document.getElementById('wish_list_image').src=require("../Images/heart1.png")
            document.getElementById('wish_list_image').value=0
          }
         }
          )
    }
    changeWishListImage()
    

    axios.get(
      'http://localhost:8080/ecommerce/books/details?book_id='+book_id,
      ).then(response=>{
        
        document.getElementById('book_name').innerHTML=response.data[0].book_title
        document.getElementById('product_image').src=require("../Images/"+response.data[0].book_title+".jpg")
        document.getElementById('book_description').innerHTML=response.data[0].long_description
        document.getElementById('no_of_orders').innerHTML=response.data[0].num_of_orders
        document.getElementById('no_of_units').innerHTML=response.data[0].num_of_units
        available_units=response.data[0].num_of_units
        document.getElementById('book_author').innerHTML=response.data[0].author
        document.getElementById('book_publisher').innerHTML=response.data[0].publisher
        document.getElementById('book_category').innerHTML=response.data[0].category
        document.getElementById('book_price').innerHTML=response.data[0].book_price
        if (!response.data[0].num_of_units>0) {
          document.getElementById('change_units').innerHTML="Out of Stock"
        }

      }
       )
      
       // Units Handling
       function addUnits() {
           if (available_units!==units) {
            units+=1
           document.getElementById('units').innerHTML=units
           }
       }
       function RemoveUnits() {
        if (units!==1) {
          units-=1
          document.getElementById('units').innerHTML=units
        }
       }


       // Wish List Handling
       function WishListHandler() {
        if (document.getElementById('wish_list_image').value===0) {
          axios.post(
            'http://localhost:8080/ecommerce/books/addtowishlist?book_id='+book_id+'&userid='+cookies.userid,
            ).then(response=>{
              changeWishListImage()
             }
              )
        }else{
          axios.post(
            'http://localhost:8080/ecommerce/books/removefromwishlist?book_id='+book_id+'&userid='+cookies.userid,
            ).then(response=>{
              changeWishListImage()
             }
              )
        }                 
       }

       // Add to cart function
       function AddtoCart() {
        axios.post(
          'http://localhost:8080/ecommerce/books/addtocart?book_id='+book_id+'&units='+units+'&userid='+cookies.userid,
          ).then(response=>{
            // When the user clicks on div, open the popup

              var popup = document.getElementById("myPopup");
              popup.classList.toggle("show");

           }
            )
       }
       
  return (
    <div>
      <Header/>
      <section className="product-section-container"> 
          <div className="product_container">
              <div className="flex_container">
              <div className="product_image" >
                <img src={Loginimg} className='product_img' id='product_img' alt='product'/>
      
              
              
              </div> 

              <div className="product-detail-container">
                  <h2 id='book_name'>Book Name</h2>
                  <p id="book_author">Author Name</p>
                  <p id='book_category'>Category</p>
                  <p id='book_description'>Book Description</p>
                  <p id='book_publisher'>publisher</p>
                  <h3 id='book_price'>Price</h3>
              </div>
                
              </div>
          


          </div>
      </section>
      <div className='image_div'>
      </div>
      <div className='product_content_div'>
      <span id='book_name'>Book Name</span><br/>
      <span id='book_description'>Book Discription</span><br/>
      Author : <span id='book_author'>Book Author</span><br/>
      Publisher :<span id='book_publisher'>Book publisher</span><br/>
      <span id='book_category'>Book Category</span><br/>
      Price : <span id='book_price'>Book Price</span>$<br/>
      <span id='no_of_orders'>Number of Orders</span><br/>
      Units Available :<span id='no_of_units'>Book Units</span><br/>
      <span id='change_units'>
      <img id='remove' className="minus_button" src={require("../Images/-.jpeg")} alt='minus img' onClick={RemoveUnits}/>
      <span id='units'>1</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <img id='add' className="add_button" src={require("../Images/+.jpeg")} alt='plus img' onClick={addUnits}/><br/>
      </span><br/>
      <img id='wish_list_image' className='wish_list_img' src={require("../Images/heart1.png")} alt='product' onClick={WishListHandler}/><br/>
      <div className="popup">
      <span className="popuptext" id="myPopup">Added to Cart</span>
      <button id='CartButton' onClick={AddtoCart}>Add to Cart</button>
      </div>
      <button>
      <a href='/'> Home Page</a>
      </button>
      </div>
      
      
      <Footer/>
    </div>
  )
    }