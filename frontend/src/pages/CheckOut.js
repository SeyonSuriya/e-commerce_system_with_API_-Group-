import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Cookies,useCookies } from 'react-cookie';
import "../components/checkout.css";

export default function CheckOut() {
  const [cookies, setCookie] = useCookies(['user']);
    
    //console.log(cookies.selectedBooks.length)
    function GetDefaultAddress() {
    axios.post(
      'http://localhost:8080/ecommerce/getaddress?userid='+cookies.userid,
      ).then(response=>{
        var Address=response.data[0].firstname+' '+response.data[0].secondname+',</br>'
            Address+=response.data[0].addressline1+',</br>'
            Address+=response.data[0].addressline2+',</br>'
            Address+=response.data[0].district+','
            Address+=response.data[0].province+',</br>'
            Address+=response.data[0].postalCode
           // console.log(Address)
        document.getElementById('address').innerHTML=Address
        //console.log(cookies.userid)
       }
        )
      }
       
        function ShowSelectedProducts() {
         
         axios.post(
          'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
          ).then(response=>{
            var cart= response.data
            setCookie('productquantities', response.data, { path: '/checkout'});
            var product='<div class="productsdiv">'
            for (let index = 0; index <cookies.selectedBooks.length; index++) {
              product+='<div class="product">'
              //product+='CartID : '+cookies.selectedBooks[index]
              for (let i = 0; i < cart.length; i++) {
                if (cookies.cart[i].id===cookies.selectedBooks[index]) {
                  product+='<span id="'+cart[i].item_id+'"></span>'
                  GetProduct(cart[i].item_id,i,cookies.selectedBooks[index])
               }
              }
             product+='</div>'
           }
          // console.log(product)
           document.getElementById('products').innerHTML=product+'</div>'
          }
          )
      }
      function GetProduct(book_id,index,cartid){
        var row=' '
        axios.get(
          'http://localhost:8080/ecommerce/books/details?book_id='+book_id,
          // eslint-disable-next-line no-loop-func
          ).then(response=>{
            console.log()
            row+='<img  class="product_image" id="'+response.data[0].book_id+'_image" style="width:20%;height:100%;">'
            row+='<div class="productInfo">'
            row+=response.data[0].book_title+'<br/>'
            row+='By '+response.data[0].author+'<br/>'
            row+='US $ '+response.data[0].book_price
            row+='</div>'
            row+='<div id="change_units" class="unitsdiv"></br></br></br>'
            row+='&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+response.data[0].book_id+'_remove" class="minus_button" style="width:25px;height:25px;margin: 0 auto;"  />'
            
            row+='&nbsp;&nbsp;&nbsp;&nbsp;<span id="'+response.data[0].book_id+'_units" class="units">'+cookies.productquantities[index].quantity+'</span>&nbsp;&nbsp;'
            row+='<img id="'+response.data[0].book_id+'_add" class="add_button" style="width:40px;height:24px;" onClick={addUnits}/></div>'
            
           // console.log(row)
            document.getElementById(book_id).innerHTML=row
            document.getElementById(response.data[0].book_id+'_image').src=require("../Images/"+response.data[0].book_title+".jpg")
            document.getElementById(response.data[0].book_id+'_remove').src=require("../Images/-.jpeg")
            document.getElementById(response.data[0].book_id+'_add').src=require("../Images/+.jpeg")
           
               // Adding AddUnits and Deduct units in cart onclick functions
       document.getElementById(response.data[0].book_id+'_add').onclick = function () {
        addUnits(response.data[0].num_of_units,cartid,response.data[0].book_id)
       }
       document.getElementById(response.data[0].book_id+'_remove').onclick = function () {
        RemoveUnits(cartid,response.data[0].book_id)
       }

          }
          )
        
      }
      function addUnits(available_units,cartid,book_id) {
        if (available_units>cookies.cart[cartid].quantity) {
          cookies.cart[cartid].quantity+=1
         axios.post(
          'http://localhost:8080/ecommerce/books/addtocart?book_id='+book_id+'&units='+1+'&userid='+cookies.userid,
          ).then(response=>{
           // ShowProductsInCart()
           }
          )
        //  ChangeTotal()
        document.getElementById(book_id+'_units').innerHTML=cookies.cart[cartid].quantity
        }
    }
    function RemoveUnits(cartid,book_id) {
     if (cookies.cart[cartid].quantity!==1) {
      cookies.cart[cartid].quantity-=1
       axios.post(
        'http://localhost:8080/ecommerce/cart/updateunits?item_id='+book_id+'&units='+cookies.cart[cartid].quantity+'&userid='+cookies.userid,
        ).then(response=>{
         // ShowProductsInCart()
         }
        )
      //  ChangeTotal()
       document.getElementById(book_id+'_units').innerHTML=cookies.productquantities[cartid].quantity
     }
    }
      
function ChangeTotal() {
  var Total=0
  for (let index = 0; index < cookies.selectedBooks.length; index++) {
    var i=0
    if (cookies.cart[i].id===cookies.selectedBooks[index]) {
      Total+=cookies.productquantities[index].quantity

    }

    
  }
  
}


    return (
        <div>
          <Header/>
      
        <div className='AddressDiv'>
          <h3>Address</h3>
          <div className='address'>
          <p id="address"  ></p>
          <script>{GetDefaultAddress()}</script>
          </div>
          <div className='changeAdressDiv'>
          <br/>
            <a href='/changeaddress'>+ Add a new Address</a><br/>
            <span onClick={GetDefaultAddress} id="changeAddressToDefault">&nbsp; Use Default Address</span>
          </div>
        </div>
        
          <span id="products" ></span>
          <script>{ShowSelectedProducts()}</script>
        

    
    
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
    
          <Footer/>
        </div>
        
      )
    }
    
    