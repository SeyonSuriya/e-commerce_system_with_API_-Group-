import React from 'react';
import Orderplaceimg01 from '../assests/Order place img 01.png';
import "../components/orderplaced.css";

export default function OrderPlaced(){

    return(
        <div>
          
        <section className='orderplace-section'>
            <div className='orderplace-content'>
                <div className='order-image'>
                    <img src={Orderplaceimg01} className='order_img'/>
                </div>
                <h1>Your Order Is Complete</h1>
                <h4>Thank you for your purchase!</h4>
                <p id='order_text01'>Your order ID is : <b>order id</b></p>
                <p id='order_text02'>You will receive an confirmation email with details of your order</p>

                <button type='submit' className="order_submit">Continue Shopping</button>
            </div>


        </section>


        </div>

    )
}