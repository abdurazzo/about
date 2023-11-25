import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { pizzas } from '../data'
import { useCart } from "react-use-cart";

const Pizza = () => {
  const { addItem, getItem, removeItem } = useCart();
  const { id } = useParams();

  const paramasFind = pizzas?.find((el) => {
    return el?.id === +id
  })

  return (
    <>
      <Nav />
      <div className="qqq">
        <img src={paramasFind?.Image} alt="" />
      </div>
      <div className="qqqq">
        <h1>Pishloqli pitsa</h1>
        <p>Haqiqiy motsarella firmenniy va alfredo sousi bilan uyg'unlikda</p>
        {!getItem(paramasFind?.id) ? (
          <button onClick={() => addItem(paramasFind)}>sotib oliw</button>
        ) : (
          <button onClick={() => removeItem(paramasFind?.id)}>ocriw</button>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Pizza
