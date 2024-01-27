import {  createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[]
}

const addProductAction = (state,action )=>{

    const checkProduct = state.products.find((obj)=> obj.id === action.payload.id);

    if(checkProduct){        
    checkProduct.quantity= parseInt(checkProduct.quantity) + parseInt( action.payload.quantity);

    }
   else{

    const newProduct = {id:action.payload.id,title:action.payload.title,category:action.payload.category,description:action.payload.description,price:action.payload.price,image:action.payload.image,quantity:parseInt(action.payload.quantity)}
    state.products.push(newProduct)
    }

 
}
const updateQuantityAction = (state,action )=>{

    const checkProduct = state.products.find((obj)=> obj.id === action.payload.id);

    if(checkProduct){        
    checkProduct.quantity=  parseInt( action.payload.quantity);

    }
   else{
    console.log("error at cart finding product")
    }
}



const removeProductAction= (state,action)=>{
    console.log(action.payload)
    state.products = state.products.filter((obj)=> obj.id!==action.payload.id)
   
}

export const productSlice =createSlice({
    name:'product',
    initialState,
    reducers:{
        addProducts : addProductAction,
        delProducts:removeProductAction,
        updateQuantity:updateQuantityAction
    }
})

export const {addProducts,delProducts,updateQuantity} = productSlice.actions

export default productSlice.reducer;