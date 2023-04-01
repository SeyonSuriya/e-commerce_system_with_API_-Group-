import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Cookies,useCookies } from 'react-cookie';
import "../components/checkout.css";

export default function CheckOut() {
  const [cookies, setCookie] = useCookies(['user']);
    
    console.log(cookies.selectedBooks)
    axios.post(
      'http://localhost:8080/ecommerce/getaddress?userid='+cookies.userid,
      ).then(response=>{
        var Address=response.data[0].firstname+' '+response.data[0].secondname+',</br>'
            Address+=response.data[0].addressline1+',</br>'
            Address+=response.data[0].addressline2+',</br>'
            Address+=response.data[0].district+','
            Address+=response.data[0].province+',</br>'
            Address+=response.data[0].postalCode
        document.getElementById('address').innerHTML=Address
        //console.log(cookies.userid)
       }
        )


        // Adding Selected products
        function Addproduct(book_id,index,cartid){
          var row=' '
          axios.get(
            'http://localhost:8080/ecommerce/books/details?book_id='+book_id,
            // eslint-disable-next-line no-loop-func
            ).then(response=>{
              //console.log(tmpproduct)
                 var tmpproduct=response.data
                 cookies.pricearray[index]=tmpproduct[0].book_price
                 console.log(cartid)
                 row+='<tr><td ><div class="product"><div class="product_selecter_div"><input type="checkbox" name="chk" id="'+cartid+'" ></div>'
                 //console.log(tmpproduct[0].book_title+'_wish_image')
                 //console.log(tmpproduct[0].book_id)
                 row+='<div class="product_image_div"><img class="product_image"  style="width:100%;height:100%;" id="'+tmpproduct[0].book_id+'_image" /></div><span id='+tmpproduct[0].book_id+'></span>'
                 row+='<div class="productInfo"><div>'+tmpproduct[0].book_title+'</div></br><div class="long_description">'+tmpproduct[0].long_description+'</div>'
                 row+=' <div>US $'+tmpproduct[0].book_price+' </div></div>'
                 row+='<div class="product_functions">'
                 row+='<div></br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+tmpproduct[0].book_id+'_wish_image" style="width:24px;height:24px; "  />&nbsp;&nbsp;'
                 row+='<img id="'+tmpproduct[0].book_id+'_delete_image" class="delete_image" style="width:24px;height:26px;margin: 0 auto;" /></div><br/></br>'
                 row+='<div id="change_units" class="unitsdiv">'
                 row+='&nbsp;&nbsp;&nbsp;&nbsp;<img  id="'+tmpproduct[0].book_id+'_remove" class="minus_button" style="width:25px;height:25px;margin: 0 auto;"  />'
                 
                 row+='&nbsp;&nbsp;&nbsp;&nbsp;<span id="'+tmpproduct[0].book_id+'_units" class="units">'+cookies.cart[index].quantity+'</span>&nbsp;&nbsp;'
                 row+='<img id="'+tmpproduct[0].book_id+'_add" class="add_button" style="width:40px;height:24px;" onClick={addUnits}/></div>'
                 row+='<br/>'
                 row+='</div></div></td></tr>'
                 
               //  console.log(row)
              document.getElementById(book_id).innerHTML=row
           
              document.getElementById(tmpproduct[0].book_id+'_image').src=require("../Images/"+tmpproduct[0].book_title+".jpg")
              document.getElementById(tmpproduct[0].book_id+'_remove').src=require("../Images/-.jpeg")
              document.getElementById(tmpproduct[0].book_id+'_add').src=require("../Images/+.jpeg")
              document.getElementById(tmpproduct[0].book_id+'_delete_image').src=require("../Images/delete.jpeg")
            
             // Adding AddUnits and Deduct units in cart onclick functions
             document.getElementById(tmpproduct[0].book_id+'_add').onclick = function () {
              addUnits(tmpproduct[0].num_of_units,index,tmpproduct[0].book_id)
             }
             document.getElementById(tmpproduct[0].book_id+'_remove').onclick = function () {
              RemoveUnits(index,tmpproduct[0].book_id)
             }
            
      
            }
            
            )
        }
        function ShowSelectedProducts() {
                  
                  var product=' '
                  for (let index = 0; index < cookies.selectedBooks.length; index++) {
                    //console.log(cart[index].item_id)
                    product+='<span id="'+cookies.selectedBooks[index]+'"></span>'
                    Addproduct(cookies.cart[index].item_id,index,cookies.cart[index].id)
                  }
                  document.getElementById('products').innerHTML=product+'</tbody>'
                 }
                
        
      
      ShowSelectedProducts()

      function addUnits(available_units,cartid,book_id) {
        if (available_units>cookies.cart[cartid].quantity) {
          cookies.cart[cartid].quantity+=1
         axios.post(
          'http://localhost:8080/ecommerce/books/addtocart?book_id='+book_id+'&units='+1+'&userid='+cookies.userid,
          ).then(response=>{
           // ShowProductsInCart()
           }
          )
          ChangeTotal()
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
        ChangeTotal()
       document.getElementById(book_id+'_units').innerHTML=cookies.cart[cartid].quantity
     }
    }

    function ChangeTotal() {
      var Total = 0
      
     
      //setCookie('selected', [], { path: '/cart'});
      for(var i=0; i<cookies.selectedBooks.length; i++){  
        if (cookies.selectedBooks[i].checked===true) {
         
          
          Total+=cookies.cart[i].quantity*cookies.pricearray[i]
        } 
    }
    document.getElementById('Total').innerHTML=Total
    
    //console.log(cookies.selected)
      
    }






    return (
        <div>
          <Header/>
      
        <div className='AddressDiv'>
          <h3>Address</h3>
          <div className='address'>
          <p id='address'></p>
          </div>
          <div className='changeAdressDiv'>
          <br/>
            <a href='/changeaddress'>+ Add a new Address</a>
          </div>

        </div>
        <div id='products' >
        
        </div>

    
    
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/>
    
          <Footer/>
        </div>
        
      )
    }
    
    