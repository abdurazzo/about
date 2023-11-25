import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useCart } from 'react-use-cart'
import axios from "axios" 

const Cart = () => {
  
  const { items, isEmpty, updateItemQuantity, removeItem, emptyCart } = useCart();

  let total =0;
  const postTest = () => {
    axios
      .post(
        `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b> Call Center: +998 99 855 73 85 </b>
    
${items
  .map((item) => {
    return `
<b>${item.name}</b> 
${item.count} x ${item.price} $ = ${item.count} 
    `;
  })
  .join("")}        
<b>Total:</b> ${total} $`
        )}&parse_mode=html`
      )
      .then(() => {
        emptyCart();
        window.location.reload();
      });
  };
  return (
    <>
    <Nav/>  
    {!isEmpty ? (   <div className="cart-ota">
      {items?.map((el) => {
        const pirceCount = el?.quantity * el?.price;
        total += pirceCount
        return(
          <div className="cart_card">
            <img  src={el?.Image} alt="" />
            <h4>{el?.name}</h4>
            <b>{pirceCount}som</b>
            <button onClick={() => updateItemQuantity(el?.id, el?.quantity -1)}>-</button>
            <p>{el.quantity}</p>
            <button  onClick={() => updateItemQuantity(el?.id, el?.quantity +1)}>+</button>
            <button onClick={() => removeItem(el?.id)} >❌</button>
          </div>
        )
      })}
    </div>):(
      <div>
        <img src="https://bellissimo.uz/images/emptystate/empty-cart-icon.svg" alt="" />
        <h1>Hozircha sizning savatchangiz boʻsh 😕</h1>
      </div>
    )}
    <h1>Total: {total} som</h1>
    {items.length ? <button onClick={() => postTest()}>zakaz beriw</button> : null}
    <Footer/>
    </>
  )
}

export default Cart