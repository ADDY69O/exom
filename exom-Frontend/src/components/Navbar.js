import React from 'react';
import { IoCart } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { delUser } from '../Redux/Reducers/UserReducers';
import { CgProfile } from "react-icons/cg";


const Navbar = () => {

    const isAuthenticated = useSelector(state=>state.userInfo.isAuthenticated)
    const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(delUser());

  }


  return (
    <div className='flex flex-row justify-around items-center h-16 bg-gray-800 text-white p-4'>
      <h1 className='text-2xl font-bold'> <Link to="/" >Exom</Link> </h1>


      <div className='flex flex-row gap-8 '>
      <p  ><Link to="/cart" className='hover:text-gray-300 flex flex-row gap-1'><IoCart  size={28}/> Cart </Link></p>
        {!isAuthenticated ?
        <div className='flex flex-row gap-4'>

          <Link to="/login" className="hover:text-gray-300" >Login</Link>
        <Link to="/signup" className="hover:text-gray-300" >Signup</Link>
         </div>
          :
          <div className='flex flex-row gap-4'>

        <p  ><Link to="/about" className='hover:text-gray-300 flex flex-row gap-1'><CgProfile  size={28}/>  </Link></p>
        <p  ><Link to="/" className='hover:text-gray-300 flex flex-row gap-1'><IoMdLogOut onClick={()=>handleLogout()}  size={28}/></Link></p>
      </div>
      }
        
      
      </div>
    </div>
  );
};

export default Navbar;
