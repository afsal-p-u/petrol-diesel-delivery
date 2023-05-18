import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const NewOrder = () => {
  const [inputs, setInputs] = useState(null)
  var total = 0
  
  const totalRef = useRef()

  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  if (inputs?.category === 'petrol') {
    total = inputs?.litre * 105
  } else if (inputs?.category === 'diesal') {
    total = inputs?.litre * 100
  }

  console.log(inputs)
  useEffect(() => {
    totalRef.current.value = total || 0
  }, [total])

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputs((prev) => {
      return {...prev, total}
    })
    axios.post(`http://localhost:5000/api/order/new`, inputs).then((res) => {
      window.location.reload()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='w-full h-[91vh] bg-green-500 flex items-center justify-center'>
        <div className="w-[80%] min-h-[38vh] bg-[#eee] py-[10px] px-[35px] rounded-sm shadow-md">
          <h2 className='text-center text-[22px] mt-[10px] font-medium text-green-500'>Order</h2>
          <div className="flex flex-wrap mt-[30px] gap-5 items-center justify-center">
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Name:</label>
              <input 
                type="text" 
                placeholder='Name' 
                className='px-[12px] py-[5px] text-[14px] outline-none border-[1px] border-slate-300 mt-1
                w-[240px]'
                onChange={handleChange}
                name="name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Contact Number:</label>
              <input 
                type="number" 
                placeholder='Contact number' 
                className='px-[12px] py-[5px] text-[14px] outline-none border-[1px] border-slate-300 mt-1
                w-[240px]'
                onChange={handleChange}
                name="contact"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>City: (Trial locations)</label>
              <select 
                className='w-[240px] py-[5px] px-[12px] outline-none border-[1px] border-slate-300 mt-1 text-[14px]'
                name="city"
                onClick={handleChange}
                defaultValue="kankanady"
                required
              >
                <option value="kankanady">Kankanady</option>
                <option value="balmatta">Balmatta</option>
                <option value="morganSGate">Morgan's Gate</option>
                <option value="attaver">Attaver</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Address:</label>
              <input 
                type="text" 
                placeholder='Address' 
                className='px-[12px] py-[5px] text-[14px] outline-none border-[1px] border-slate-300 mt-1
                w-[240px]'
                onChange={handleChange}
                name="address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Companies:</label>
              <select  
                id="" 
                className='w-[240px] py-[5px] px-[12px] outline-none border-[1px] border-slate-300 mt-1 text-[14px]'
                onClick={handleChange}
                name="company"
                required
              >
                <option value="hidustanPetroleum">Hindustan Petroleum</option>
                <option value="reliancePetroleum">Reliance Petroleum</option>
                <option value="bharatPetroleum">Bharat Petroleum</option>
                <option value="indianOil">Indian Oil</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Category:</label>
              <select 
                className='w-[240px] py-[5px] px-[12px] outline-none border-[1px] border-slate-300 mt-1 text-[14px]'
                onClick={handleChange}
                name="category"
                required
              >
                <option value="petrol">Petrol</option>
                <option value="diesal">Diesal</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Litre: (min: 1 ltr)</label>
              <input 
                type="number" 
                placeholder='Litre' 
                className='px-[12px] py-[5px] text-[14px] outline-none border-[1px] border-slate-300 mt-1
                w-[240px]'
                onChange={handleChange}
                name="litre"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Payment Method:</label>
              <select 
                className='w-[240px] py-[5px] px-[12px] outline-none border-[1px] border-slate-300 mt-1 text-[14px]'
                onClick={handleChange}
                name="paymentMethod"
                required
              >
                <option value="petrol">Cash on Delivery</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-[13px] text-gray-500'>Total:</label>
              <input 
                type="text"
                ref={totalRef}
                placeholder='Total' 
                className='px-[12px] py-[5px] text-[14px] outline-none border-[1px] border-slate-300 mt-1
                w-[240px]'
                onChange={handleChange}
                name="total"
                disabled
              />
            </div>
          </div>
          <div className="button flex items-center justify-center mt-[40px] mb-[30px]">
            <button 
              className='px-[20px] py-[7px] rounded-md bg-green-500 text-white text-[14px] font-medium
              hover:bg-[#fff] hover:text-green-500'
              onClick={handleSubmit}
            
            >
              Submit
            </button>
          </div>
        </div>
    </div>
  )
}

export default NewOrder