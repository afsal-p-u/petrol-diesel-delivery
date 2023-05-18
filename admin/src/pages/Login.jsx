import React from "react";
import axios from 'axios'
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
  const [inputs, setInputs] = useState(null)

  const {admin, setAdmin} = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/admin-login`, inputs).then((res) => {
      setAdmin(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[390px] min-h-[40vh] bg-[#eee] shadow-md px-[20px] py-[10px]">
        <h3 className="text-center text-[18px] font-semibold mb-4">LOGIN</h3>
        <div className="flex flex-col mb-3">
          <label htmlFor="" className="mb-1 text-[13px] font-medium">
            Email
          </label>
          <input
            type="text"
            placeholder="Email address"
            className="px-[10px] py-[7px] text-[13px]"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="" className="mb-1 text-[13px] font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="px-[10px] py-[7px] text-[13px]"
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="flex mt-5 justify-center">
            <button 
              className="px-[15px] py-[7px] rounded-md bg-gray-300 font-semibold hover:bg-gray-200"
              onClick={handleSubmit}
            >
                Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
