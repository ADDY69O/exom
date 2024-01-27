import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { delProducts, updateQuantity } from '../Redux/Reducers/ProductReducers';
const Cart = () => {


  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();


    const handleRemoveItem =(item)=>{
        dispatch(delProducts({id:item.id}));
    }

    const handleUpdateQuantity = (e,item)=>{
      const data ={
        id:item.id,
        quantity:e.target.value
      }
      dispatch(updateQuantity(data))
    }


  return (
    <div className='container mx-auto mt-10'>

      
      <div className='p-16 border-2 border-gray-500'>
      <h1 className='text-4xl font-bold mb-16'>Shopping Cart</h1>

      {products &&
        products.map((item) => (
          <div
            key={item.id}
            className='flex flex-row items-center justify-between border-2 border-gray-500 p-4 mb-4'
          >
            <div className='flex items-center'>
              <img
                className='w-24 h-24 object-cover mr-4'
                src={item.image}
                alt={item.title}
              />
              <div>
                <h1 className='text-2xl font-bold mb-2'>{item.title}</h1>
                <p className='text-gray-600'>{item.description}</p>
                <div className='flex items-center gap-3'>
                <label htmlFor="quantity" className='text-xl'>Quantity</label>
                <input className='m-2 pl-2 text-center w-12 border-2 border-gray-400 ' type="number" value={item.quantity} min="1" onChange={(e)=>handleUpdateQuantity(e,item)} name="quantity" id="quantity" />
              </div>
              </div>
             
            </div>
           
            <div className='flex flex-col gap-4'>

            <p className='text-xl font-bold'>${  (item.price * item.quantity).toFixed(2)}</p>
            <MdDeleteOutline size={40} className="cursor-pointer" onClick={()=>handleRemoveItem(item)}/>
            </div>
          </div>
        ))}
      {/* {products.length > 0 && (
        <div className='flex justify-end mt-6'>
          <div className='text-xl font-bold'>
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )} */}
      {products.length>0 ? 
      <div className='flex justify-end'>

      <button className=' p-4 rounded-full  bg-green-600 text-white font-semibold '> Place Order</button>
      </div> :
      <div className='flex justify-center text-center'> 
        <iframe src="https://lottie.host/embed/1a4baa45-1e2c-47d3-8501-943d44f3c4ad/nleF52ouvm.json" className=' border-2 border-gray-500 w-full h-[300px]' alt="" />
      </div>
}
      </div>
    </div>
  );
};

export default Cart;
