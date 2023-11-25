import React from 'react'
import{ Link} from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {pizzas} from '../data'

const Home = () => {
  return (
    <>
    <Nav/>
    <Header/>
     <div className="parent">
     {pizzas?.map((el) => {
      return(
        <Link to={`/pizza/${el?.id}`} key={el?.id} className="card">
        <img src={el?.Image} alt="" />
        <h3>{el?.name}</h3>
        <b>{el?.price} so'm</b>
        </Link>
      )
     })}
     </div>
    <Footer/>
    </>
  )
};

export default Home