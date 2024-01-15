import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {

  const addToCartHandler=()=>{}
  return (
    <div className='home'>
      <section></section>
      <h1>LATEST PRODUCTS
      <Link to="/search" className="findmore">
        More
      </Link>
      </h1>
     <main>
      <ProductCard
      productId='adadfas'
      name='Macbook'
      price={4546}
      stock={5}
      handler={addToCartHandler}
      photo="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg"/>
     </main>
    </div>
  )
}

export default Home;