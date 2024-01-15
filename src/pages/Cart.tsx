import React, { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItems from '../components/CartItems';
import { Link } from 'react-router-dom';

const cartItems= [

  {
    productId: "dfadsgfafd",
    photo: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,

  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 20;
const discount= 400;
const total=  subtotal + tax + shippingCharges;

const Cart = () => {

  const[couponCode, setCouponCode]=useState<string>("");
  const[isValidCouponCode, setIsVaidCouponCode]=useState<boolean>(false);

  useEffect(()=>{
    const timeOutID = setTimeout(()=>{
     if(Math.random()> 0.5) setIsVaidCouponCode(true);
     else setIsVaidCouponCode(false)
    },1000);

    return ()=>{
      clearTimeout(timeOutID)
    }
  },[couponCode])
  return (
    <div className='cart'>
      <main>

        {cartItems.length > 0 ? cartItems.map((i,idx)=>(
          <CartItems key={idx} cartItem={i}/>
        ) ) : <h1> No Items added </h1>}
      </main>
      <aside>

        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount:  <em>
         - ₹{discount}
          </em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input type="text"  value={couponCode} onChange={(e)=> setCouponCode(e.target.value)}/>

        {
          couponCode && (isValidCouponCode? (<span className='green'>₹{discount} off using the <code>{couponCode}</code></span>) : (<span className='red'>Invalide Coupon <VscError/></span>))
        }

        {
          cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
        }

      </aside>
    </div>
  )
}

export default Cart