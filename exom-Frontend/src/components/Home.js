import React, { useEffect, useState } from 'react'
import Items from './Items';

const Home = () => {
const [product, setproduct] = useState([])

const fetchProducts =async()=>{

    const data = await fetch('https://fakestoreapi.com/products');
    const product = await data.json();
    console.log(product)
    setproduct(product)




}



useEffect(() => {
    fetchProducts()

}, [])




  return (
    <div className='flex flex-wrap'>
    {product && product.map((item)=>(
     <Items key={item.id} item={item} />   
    ))

    }



    </div>
  )
}

export default Home