import axios from 'axios'
import React, { useState } from 'react'

const PriceControlBar = () => {
    const [petrolPrice, setPetrolPrice] = useState(null)
    const [dieselPrice, setDieselPrice] = useState(null)

    const handlePetrolSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:5000/api/prices/pet`, {petrol: petrolPrice}).then((res) => {
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleDieselSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:5000/api/prices/die`, {diesel: dieselPrice}).then((res) => {
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }


  return (
    <div className='absolute top-2 left-5 flex gap-2'>
        <div className="flex items-center px-2 gap-5 bg-green-500 p-[10px] rounded-md">
            <label htmlFor="" className='text-white font-semibold'>Petrol</label>
            <input 
                type="number" 
                placeholder='Petrol' 
                className='w-[100px] text-[14px] px-[10px] py-[2px] outline-none'
                onChange={(e) => setPetrolPrice(e.target.value)}
                required
            />
            <button
                className='px-[20px] py-[5px] bg-[#fff] rounded-md text-[13px] font-semibold'
                onClick={handlePetrolSubmit}
            >
                Update
            </button>
        </div>

        <div className="flex items-center px-2 gap-5 bg-green-500 p-[10px] rounded-md">
            <label htmlFor="" className='text-white font-semibold'>Diesel</label>
            <input 
                type="number" 
                placeholder='Diesel' 
                className='w-[100px] text-[14px] px-[10px] py-[2px] outline-none'
                onChange={(e) => setDieselPrice(e.target.value)}
                required
            />
            <button
                className='px-[20px] py-[5px] bg-[#fff] rounded-md text-[13px] font-semibold'
                onClick={handleDieselSubmit}
            >
                Update
            </button>
        </div>
    </div>
  )
}

export default PriceControlBar