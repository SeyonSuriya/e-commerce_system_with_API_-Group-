import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import "../components/product_page.css"
import { Cookies, useCookies } from 'react-cookie';



export default function Product() {
  const [cookies, setCookie] = useCookies(['user']);
  // Remove this Set Cookie after because this will be created form registration page
  setCookie('userid', '1', { path: '/'});
  
    const queryParameters = new URLSearchParams(window.location.search)
    const book_id = queryParameters.get("bookid")
    var units=1
    var available_units=0

      setCookie('wishlistimage', 'heart2.png', { path: '/product'});
  
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
        
        document.getElementById('wish_list_image').src=require("../Images/"+cookies.wishlistimage)
        if (cookies.wishlistimage==='heart2.png') {
                  cookies.wishlistimage='heart1.png'
                  axios.post(
                    'http://localhost:8080/ecommerce/books/addtowishlist?book_id='+book_id+'&userid='+cookies.userid,
                    ).then(response=>{
                      console.log(response.data)
                     }
                      )
        }else{
          cookies.wishlistimage='heart2.png'
        }
        
       }

       // Add to cart function
       function AddtoCart(e) {
        e.preventDefault();

      
      var userid=cookies.userid
         const postData = {
           book_id,
           units,
           userid,
         };
   
           axios.post(
             'http://localhost:8080/ecommerce/login',
             postData,
             ).then(response=>{
               if (response.data === 'Login Granted') {
                  document.getElementById("Homepage").click();
                }else{
                  document.getElementById('ErrorMessage').innerHTML=response.data;
                }
              }
               )
        }
       

  return (
    <div>
      <Header/>
      
      <img id='product_image' src=' ' alt='product'/>
      
      <span id='book_name'>Book Name</span><br/>
      <span id='book_description'>Book Discription</span><br/>
      Author : <span id='book_author'>Book Author</span><br/>
      Publisher :<span id='book_publisher'>Book publisher</span><br/>
      <span id='book_category'>Book Category</span><br/>
      <span id='book_price'>Book Price</span>$<br/>
      <span id='no_of_orders'>Number of Orders</span><br/>
      Units Available :<span id='no_of_units'>Book Units</span><br/>

      <span id='change_units'>
      <img id='remove' className="minus_button" src={require("../Images/-.jpeg")} alt='minus img' onClick={RemoveUnits}/>
      <span id='units'>1</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <img id='add' className="add_button" src={require("../Images/+.jpeg")} alt='plus img' onClick={addUnits}/><br/>
      </span><br/>
      <button id='CartButton' onClick={AddtoCart}>Add to Cart</button>
      <img id='wish_list_image' className='wish_list_img' src={require("../Images/heart1.png")} alt='product' onClick={WishListHandler}/>
      <Footer/>
    </div>
  )
    }
    
    