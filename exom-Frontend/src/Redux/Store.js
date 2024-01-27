import { configureStore} from "@reduxjs/toolkit";
import ProductReducers from "./Reducers/ProductReducers";
import UserReducers from "./Reducers/UserReducers";

export default configureStore({
    reducer:{
       
        product:ProductReducers,
        userInfo:UserReducers

    }

})

