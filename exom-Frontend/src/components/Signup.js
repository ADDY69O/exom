import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');   

  const navigate = useNavigate();

  const handleSubmit =async()=>{
        
    
  
    
      if (!username) {
          window.alert('Full Name can not be null');
          return;
      }

      if (!(email.includes('@') && email.includes('.'))) {
          window.alert('Invalid Email');
          return;
      }

      if (! ((phone.length === 10 ) && !isNaN(phone))  ) {
          window.alert('Mobile No should be a number with a length of 10');
          return;
      }

      if (!(password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password))) {
          window.alert('Password should be at least 8 characters long and alphanumeric');
          return;
      }

          
      const body={email,password,username,phone};
     // https://auth-962m.onrender.com/api/v1/user/register

      await axios.post("https://exomback.onrender.com/api/v1/user/register",body).then(response => {
         window.alert(response.data.message);
        navigate("/login")
        })
        .catch(error => {

          window.alert(error.response.data.message)

        
        });
 
  }

  return (
    <div className='flex flex-col text-center justify-center items-center mt-36'>
            <div className='mb-4'>
                <label htmlFor="Username" className='text-2xl font-bold mb-2 text-gray-800'>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} className='p-4 border-2 border-gray-500 rounded-md w-64 focus:outline-none focus:border-blue-400' id='Username' placeholder='Username' />
            </div>
            <div className='mb-4 ml-12'>
                <label htmlFor="Email" className='text-2xl font-bold mb-2 text-gray-800'>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className='p-4 border-2 border-gray-500 rounded-md w-64 focus:outline-none focus:border-blue-400' id='email' placeholder='Email' />
            </div>
            <div className='mb-4'>
                <label htmlFor="Phone" className='text-2xl font-bold mb-2 text-gray-800'>Phone no.</label>
                <input type="number" onChange={(e) => setPhone(e.target.value)} className='p-4 border-2 border-gray-500 rounded-md w-64 focus:outline-none focus:border-blue-400' id='Phone' placeholder='----------' />
            </div>
            <div className='mb-4'>
                <label htmlFor="password" className='text-2xl font-bold mb-2 text-gray-800'>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-4 border-2 border-gray-500 rounded-md w-64 focus:outline-none focus:border-blue-400' id='password' placeholder='*************' />
            </div>
            <button onClick={()=>{handleSubmit()}} className='py-3 px-6 border-2 rounded-lg border-gray-400 bg-blue-500 text-white hover:bg-blue-800 transition-all duration-300 focus:outline-none'>
                Sign Up
            </button>
           
        
        </div>
  )
}

export default Signup