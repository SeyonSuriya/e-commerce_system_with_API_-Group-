import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';


import "../components/checkout.css";

export default function CheckOut() {
  const [cookies, setCookie] = useCookies(['user']);
  setCookie('pricearray', [], { path: '/checkout'});
    
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
        setCookie('newaddress', ' ', { path: '/checkout'});

      }
      function ChangeNewAddress() {
        if (cookies.newaddress!==' ') {
          document.getElementById('address').innerHTML=cookies.newaddress
        }
        
      }
       
        function ShowSelectedProducts() {
         
         axios.post(
          'http://localhost:8080/ecommerce/cart/books?userid='+cookies.userid,
          ).then(response=>{
            //var cart= response.data
            setCookie('productquantities', response.data, { path: '/checkout'});
            setCookie('product', '<div class="productsdiv">', { path: '/checkout'});
            //console.log(cookies.cart)
            //console.log(cookies.selectedBooks)
            for (let index = 0; index <cookies.selectedBooks.length; index++) {
              cookies.product+='<div class="product">'
              
              //cookies.product+='CartID : '+cookies.selectedBooks[index]
              for (let i = 0; i < cookies.productquantities.length; i++) {
                var addproduct=' '
                
                if (cookies.productquantities[i].id===cookies.selectedBooks[index]) {
                  addproduct+='<span id="'+cookies.productquantities[i].item_id+'"></span>'
                  GetProduct(cookies.productquantities[i].item_id,i,cookies.selectedBooks[index])
                  //break;
               }
               cookies.product+=addproduct
              }
              cookies.product+='</div>'
           }
          // console.log(cookies.product)
           document.getElementById('products').innerHTML=cookies.product+'</div>'

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
            cookies.pricearray[index]=response.data[0].book_price
            row+='<div class="maindiv">'
            row+='<img  class="product_image"  id="'+response.data[0].book_id+'_image" style="width:20%;height:70%;">'
            row+='<div class="productInfo"> <p className={Style["booktitle"]}>'
            row+=response.data[0].book_title+'</p>'
            row+='By '+response.data[0].author+'<br/>'
            row+='<p class="price">US $ '+response.data[0].book_price
            row+='</p></div>'
            row+='<div id="change_units" class="unitsdiv"></br></br></br>'
            row+='&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+response.data[0].book_id+'_remove" class="minus_button" style="width:25px;height:25px;margin: 0 auto;"  />'
            
            row+='&nbsp;&nbsp;&nbsp;&nbsp;<span id="'+response.data[0].book_id+'_units" class="units">'+cookies.productquantities[index].quantity+'</span>&nbsp;&nbsp;'
            row+='<img id="'+response.data[0].book_id+'_add" class="add_button" style="width:40px;height:24px;" onClick={addUnits}/></div>'
            row+='</div>'
            
           // console.log(row)
            document.getElementById(book_id).innerHTML=row
            document.getElementById(response.data[0].book_id+'_image').src=require("../Images/"+response.data[0].book_title+".jpg")
            document.getElementById(response.data[0].book_id+'_remove').src=require("../Images/-.jpeg")
            document.getElementById(response.data[0].book_id+'_add').src=require("../Images/+.jpeg")
           
               // Adding AddUnits and Deduct units in cart onclick functions
       document.getElementById(response.data[0].book_id+'_add').onclick = function () {
        addUnits(response.data[0].num_of_units,index,response.data[0].book_id)
       }
       document.getElementById(response.data[0].book_id+'_remove').onclick = function () {
        RemoveUnits(index,response.data[0].book_id)
       }
       ChangeTotal()


          }
          )
      }
      function addUnits(available_units,index,book_id) {
        if (available_units>cookies.productquantities[index].quantity) {
          cookies.productquantities[index].quantity+=1
         axios.post(
          'http://localhost:8080/ecommerce/books/addtocart?book_id='+book_id+'&units='+1+'&userid='+cookies.userid,
          ).then(response=>{
           // ShowProductsInCart()
           }
          )
          ChangeTotal()
        document.getElementById(book_id+'_units').innerHTML=cookies.productquantities[index].quantity
        }
    }
    function RemoveUnits(index,book_id) {
     if (cookies.productquantities[index].quantity!==1) {
      cookies.productquantities[index].quantity-=1
      // console.log(book_id)
      // console.log(cookies.productquantities[index].quantity)
      // console.log(cookies.userid)
       axios.post(
        'http://localhost:8080/ecommerce/cart/updateunits?item_id='+book_id+'&units='+cookies.productquantities[index].quantity+'&userid='+cookies.userid,
        ).then(response=>{
         // ShowProductsInCart()
         }
        )
        ChangeTotal()
       document.getElementById(book_id+'_units').innerHTML=cookies.productquantities[index].quantity
     }
    }
    var purchaceitems=[]
function ChangeTotal() {
  purchaceitems=[]
  var Total=0
  for (let index = 0; index < cookies.selectedBooks.length; index++) {
    for(let i=0;i<cookies.productquantities.length;i++){
    if (cookies.productquantities[i].id===cookies.selectedBooks[index]) {
      Total+=cookies.productquantities[index].quantity*cookies.pricearray[i]
      // selectedBooksDto[i].units=cookies.productquantities[index].quantity
      // selectedBooksDto[i].book_id=cookies.productquantities[index].item_id

    var singleObj = {};
    singleObj['units'] = cookies.productquantities[index].quantity
    singleObj['book_id'] = cookies.productquantities[index].item_id
    purchaceitems.push(singleObj);

    }
  }
}
document.getElementById('Total').innerHTML=Total

}

function PlaceOrder() {
  var address=document.getElementById('address').innerHTML
  var userid=cookies.userid
  
  const purchaceDetails = {
    purchaceitems,
   address,
   userid ,
   

  };
  console.log(purchaceDetails)
    axios.post(
      'http://localhost:8080/ecommerce/placeorder',
      purchaceDetails,
      ).then(response=>{
        setCookie('orderid', response.data, { path: '/orderplaced'});
        document.getElementById("Checkoutpage").click();  
      }
      )
}

    return (
        <div>
          <Header/>
          <div class='ordsum'>
            <div class='orderSummayDiv'>
              <h1>Order Summary</h1>
              <p id='total'>&ensp;&ensp;&ensp;Total $ <span id="Total"></span></p><br></br><br></br>
              <div class='place_order_button'><button class='po_button' onClick={PlaceOrder}><b>Place Order</b></button></div>
            </div>
          </div>
        <div className='AddressDiv'>
          <h3>Address</h3>
          <div className='address'>
          <p id="address"  ></p>
          <script>{GetDefaultAddress}</script>
          <script>{ChangeNewAddress}</script>

         
          </div>
         
          <div className='changeAdressDiv'>
          <br/>
            <a href='/changeaddress'>+ Add a new Address</a><br/>
            <span  id="changeAddressToDefault">&nbsp; <button onClick={GetDefaultAddress}>Use Default Address</button></span>
          </div>
        </div>
       
      
        
          <span id="products" ></span>
          <script>{ShowSelectedProducts()}</script>
        

    
    
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
    
          <a href='/orderplaced' id="Checkoutpage" > </a>
          <Footer/>
        </div>
      )
    }
    
    