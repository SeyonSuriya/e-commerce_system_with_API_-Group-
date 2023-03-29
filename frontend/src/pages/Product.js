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
                  <h2 id='book_name'>Harry Potter And The Philosopher</h2>
                  <p id="book_author">J.K. rowling</p>
                  <p id='book_category'>Story</p>
                  <p id='book_description'>The boy wizard Harry Potter has been casting a spell over young readers and
                  their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in 
                  print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated
                  and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime ...
                  Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number
                  four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly
                  confiscated by his grisly aunt and uncle.</p>
                  <p id='book_publisher'> Bloomsbury Publishing PLC</p>
                  <h3 id='book_price'><b>Price: $</b><b>15</b></h3>
                  <p id="no_of_units">Units Available: <b>100</b></p>

                  <span id='change_units'>
                  <img id='remove' className="minus_button" src={require("../Images/-.jpeg")} alt='minus img' onClick={RemoveUnits}/>
                  <span id='units'>1</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <img id='add' className="add_button" src={require("../Images/+.jpeg")} alt='plus img' onClick={addUnits}/><br/>
                  </span><br/>

                    
                  <img id='wish_list_image' className='wish_list_img' src={require("../Images/heart1.png")} alt='product' onClick={WishListHandler}/><br/>
                  <div className="popup">
                  <span className="popuptext" id="myPopup"></span>
                  <button id='CartButton' onClick={AddtoCart}>Add to Cart</button>
                  </div>
              </div>
                
              </div>
          


          </div>
      </section>
      
      
      
      <Footer/>
    </div>
  )
    }