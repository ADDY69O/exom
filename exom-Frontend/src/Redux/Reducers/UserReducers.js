import {  createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:{},
    isAuthenticated:false
}

const addUserAction = (state,action)=>{
    console.log(action.payload)
    const newUser={username:action.payload.username,email:action.payload.email,phone:action.payload.phone};

    state.isAuthenticated=true;
    state.user=newUser;




}

const removeUserAction = (state,action)=>{

   state.isAuthenticated=false;
   state.user={};
  


}


export const userSlice =createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        addUser : addUserAction,
        delUser: removeUserAction
      
    }
})

export const {addUser,delUser} = userSlice.actions

export default userSlice.reducer;