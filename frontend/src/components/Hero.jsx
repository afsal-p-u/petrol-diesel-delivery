import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hero = () => {
    const [petrol, setPetrol] = useState(null)
    const [diesel, setDiesel] = useState(null)

    useEffect(() => {
        const getPetrolRate = () => {
            axios.get(`http://localhost:5000/api/prices/pet`).then((res) => {
                setPetrol(res.data[0])
            }).catch((err) => {
                console.log(err)
            })
        }
        const getDieselRate = () => {
            axios.get(`http://localhost:5000/api/prices/die`).then((res) => {
                setDiesel(res.data[0])
            }).catch((err) => {
                console.log(err)
            })
        }
        getPetrolRate()
        getDieselRate()
    }, [])

  return (
    <div className='w-full h-[91vh] bg-image-1 bg-cover bg-center flex justify-end'>
        <div className="w-[300px] h-[60px] bg-[#fff] flex justify-between px-5">
            <div className="flex items-center justify-center">
                <small className='text-[19px] font-medium'>Petrol</small>
                <p className='ml-2 font-bold text-green-500'>{petrol ? petrol.petrol : 0} RS</p>
            </div>
            <div className="flex items-center justify-center">
                <small className='text-[19px] font-medium'>Diesal</small>
                <p className='ml-2 font-bold text-green-500'>{diesel ? diesel.diesel : 0} RS</p>
            </div>
        </div>
        <div className="absolute left-[70px] top-[28%] text-white text-[50px] font-medium z-30">
            Doorstep Diesal/Petrol <br /> 
            <span className='font-bold text-green-500 shadow-lg'>Delivery</span>
            <br />
            <button 
                className='text-[15px] px-[25px] py-[6px] bg-green-500 rounded-md font-semibold hover:bg-white
                hover:text-green-500'
            >
                Book New
            </button>
        </div>
    </div>
  )
}

export default Hero