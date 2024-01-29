import axios from 'axios';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Reducers/UserReducers';

    const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const dispatch = useDispatch();
        const naviagate = useNavigate();

        const handleSubmit =async()=>{
           if (!(password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password))) {
            window.alert('Password should be at least 8 characters long and alphanumeric');
            return;
        }

        if (!(email.includes('@') && email.includes('.'))) {
            window.alert('Invalid Email');
            return;
        }

            const body={email,password};
//https://exomback.onrender.com/
            await axios.post("https://exomback.onrender.com/api/v1/user/login",body).then(response => {
                window.alert(response.data.message);
                // console.log(response.data)
                response.data.user.token=response.data.token;
                dispatch(addUser(response.data.user))
                localStorage.setItem("userInfo",response.data.token);
                naviagate("/")
              })
              .catch(error => {

                window.alert(error.response.data.message)

              
              });
       
        }

        return (
            <div className='flex flex-col justify-center items-center mt-36'>
                <div className='mb-6'>
                    <label htmlFor="email"  className='text-2xl font-bold mb-2 text-gray-800'>Email</label>
                    <input type="email" required onChange={(e)=>{setEmail(e.target.value)}} className='p-4 border-2 border-gray-500 rounded-md w-64 focus:outline-none focus:border-blue-400' id='email' placeholder='Email' />
                </div>
                <div className='mb-6 mr-10'>
                    <label htmlFor="password" className='text-2xl font-bold mb-2 text-gray-800'>Password </label>
                    <input type="password" required onChange={(e)=>{setPassword(e.target.value)}} className='p-4 border-2 border-gray-500 rounded-md w-64 focus:outline-none focus:border-blue-400' placeholder='*************' id='password' />
                </div>
                
                <button onClick={()=>handleSubmit()} className='py-3 px-6 border-2 rounded-lg border-gray-400 bg-blue-500 text-white hover:bg-blue-800 transition-all duration-300 focus:outline-none'>
                    Login
                </button>
            </div>
        );
    };

    export default Login;