import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import "../components/product_page.css"




export default function Product() {
  const [cookies, setCookie] = useCookies(['user']);
  // Remove this Set Cookie after because this will be created form registration page
  
  
    const queryParameters = new URLSearchParams(window.location.search)
    const book_id = queryParameters.get("bookid")
    var units=1
    var available_units=0
    setCookie('book_id', book_id, { path: '/product'});
    

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
        document.getElementById('product_img').src=require("../Images/"+response.data[0].book_title+".jpg")
        document.getElementById('book_description').innerHTML=response.data[0].long_description
        document.getElementById('no_of_orders').innerHTML=response.data[0].num_of_orders+' orders'
        document.getElementById('no_of_units').innerHTML='Units Available: <b>'+response.data[0].num_of_units+'</b>'
        available_units=response.data[0].num_of_units
        document.getElementById('book_author').innerHTML=response.data[0].author
        document.getElementById('book_publisher').innerHTML='publisher : '+response.data[0].publisher
        document.getElementById('book_category').innerHTML=response.data[0].category
        document.getElementById('book_price').innerHTML='Price: $'+response.data[0].book_price
        if (!response.data[0].num_of_units>0) {
          document.getElementById('change_units').innerHTML="Out of Stock</br>"
          document.getElementById('cartbuttondiv').innerHTML='</br></br></br>'
        }
        

      }
       )
      
       // Units Handling
       function addUnits() {
           if (available_units>units) {
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
                <img  className='product_img' id='product_img' alt='product'/>
              </div> 

              <div className="product-detail-container">
                  <h2 id='book_name'>Book Name</h2>
                  <p id="book_author">J.K. rowling</p>
                  <p id='book_category'>Story</p>
                  <p id='book_description'>Long description</p>
                  <p id='book_publisher'> Bloomsbury Publishing PLC</p>
                  <p id='no_of_orders'> orders</p>
                  <h3 id='book_price'><b>Price: $</b><b>15</b></h3>
                  <p id="no_of_units">Units Available: <b></b></p>

                  <span id='change_units'>
                  <img id='remove' className="minus_button" src={require("../Images/-.jpeg")} alt='minus img' onClick={RemoveUnits}/>
                  <span id='units'>1</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <img id='add' className="add_button" src={require("../Images/+.jpeg")} alt='plus img' onClick={addUnits}/><br/>
                  </span><br/>

                    
                  <img id='wish_list_image' className='wish_list_img' src={require("../Images/heart1.png")} alt='product' onClick={WishListHandler}/><br/>
                  <div className="popup">
                  <span className="popuptext" id="myPopup"></span>
                  <span id='cartbuttondiv'>
                  <button id='CartButton' onClick={AddtoCart}>Add to Cart</button>

                  </span>
                  </div>
              </div>
                
              </div>
          


          </div>
      </section>
      
      
      
      <Footer/>
    </div>
  )
    }