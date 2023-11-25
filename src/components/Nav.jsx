import React from 'react'
import { Link } from 'react-router-dom'
import{ useCart } from 'react-use-cart'


const Nav = () => {
  const {totalItems} =useCart()
  return (
    <>
<div className="parent2">
  <div className="left">
    <img src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo.png&w=320&q=75" alt="" />

  </div>
  <div className="left1">
    <h1>Shahar: Toshkent</h1>
  </div>
  <div className="right1">
    <img src="https://bellissimo.uz/images/phone.svg" alt="" />
    <h1>1174</h1>
    <p>
40 daqiqada tekin yetkazib beramiz yoki pitsa bepul</p>
  </div>
  <div className="right">
    <img src="https://bellissimo.uz/_next/image?url=%2Fimages%2Fhalal.png&w=64&q=75" alt="" />
  </div>
  <Link to={'/'}>home</Link>
  <Link to={'/Cart'}>
    savatcha
  <sub>{totalItems}</sub>
  </Link>
</div>
    </>
  )
}

export default Nav