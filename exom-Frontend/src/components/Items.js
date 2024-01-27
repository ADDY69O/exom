import React, { useState } from 'react'
import {useDispatch} from 'react-redux';

import ReactStars from "react-rating-stars-component";
import { addProducts } from '../Redux/Reducers/ProductReducers';

const Items = (props) => {
  const [quantity, setQuantity] = useState(1)
    const dispatch =  useDispatch();
  const [select, setSelect] = useState(true)
    const handleAddProducts =()=>{
      const productToAdd = {
        id:props.item.id,
        title: props.item.title,
        description: props.item.description,
        image: props.item.image,
        price: props.item.price,
        quantity: quantity, 
      };

        dispatch(addProducts(productToAdd));
    }

    const handleSelect =(e)=>{
      setQuantity(e.target.value);

      if(e.target.value ==="6"){
        setSelect(false);
      }
      
    }
  return (
    <div className='flex flex-col border-2 border-gray-500  p-12 my-4 mx-4  w-80'>

    <h1 className='text-3xl font-sans font-bold mb-4'>{props.item.title.length>15?props.item.title.slice(0,12):props.item.title}</h1>
    {/* <p>{props.item.description}</p> */}
    <img src={props.item.image}className="w-68 h-56 object-fit  border-gray-400" alt="" />
    <ReactStars 
    classNames="mt-2 mb-2 ml-4"
    count={5}
    value={props.item.rating.rate}
    size={40}
    activeColor="#ffd700"
  />
    <h3 className='mt-4 ml-4 text-2xl  '>Price : ${props.item.price}</h3>
    


    {select===true ?
  <div className='flex flex-row gap-3 ml-4 mt-2 mb-2'>
    <label htmlFor="quantity" className='text-2xl'>Quantity</label>
    <select name="quantity" className='border-2 border-gray-500' id="quantity" onChange={(e)=>handleSelect(e)}>
      <option  value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">5+</option>

    </select>
  </div>
   :
   <div className='flex flex-row gap-3 ml-4 mt-2 mb-2' >
    <label htmlFor="qu" className='text-2xl'>Quantity</label>
     <input type="number" min="1" onChange={(e)=>setQuantity(e.target.value)} className='border-2 border-gray-500 w-12' value={quantity} id="qu"/>
   </div>
    }
    

    <button className=' rounded-xl pt-4 pl-2 pr-2 pb-4 bg-yellow-600 text-center text-2xl font-semibold cursor-pointer' onClick={handleAddProducts}>Add to Cart</button>



    </div>
  )
}

export default Items