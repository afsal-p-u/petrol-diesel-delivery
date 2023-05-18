import React, { useContext, useState } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const [inputs, setInputs] = useState(null)

    const {setUser} = useContext(AuthContext)

    const handleChange = (e) => {
        setInputs((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const server = 'http://localhost:5000/api'

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${server}/auth/login`, inputs).then((res) => {
            setUser(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
        <Navbar menu="auth" />
        <div className='w-full h-[91vh] bg-green-500 flex items-center justify-center'>
            <div className="w-[370px] min-h-[20vh] bg-[#eee] rounded-md">
                <h3 className='my-[15px] text-center text-[19px] font-medium text-green-500'>
                    Login
                </h3>
                <div className="mt-2 px-[20px]">
                    <div className="flex flex-col px-3 mb-2">
                        <label htmlFor="" className='text-[13px] mb-1 font-normal text-gray-600'>Email:</label>
                        <input 
                            type="email" 
                            placeholder='Email address' 
                            className='px-[15px] py-[5px] outline-none border-[1px] border-gray-300 text-[13px]'
                            onChange={handleChange}
                            name='email'
                            required
                        />
                    </div>
                    <div className="flex flex-col px-3 mb-2">
                        <label htmlFor="" className='text-[13px] mb-1 font-normal text-gray-600'>Password:</label>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='px-[15px] py-[5px] outline-none border-[1px] border-gray-300 text-[13px]'
                            name='password'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mt-5 flex items-center justify-center mb-[25px]">
                        <button 
                            className='px-[20px] py-[7px] font-semibold bg-green-500 rounded-md text-[#eee]
                            hover:bg-white hover:text-green-500'
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login