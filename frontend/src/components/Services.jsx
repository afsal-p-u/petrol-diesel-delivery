import React, { useEffect, useState } from 'react'
import axios from 'axios'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'

const Services = () => {
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
    <div className='w-full pb-[50px] bg-[#eee]' id='services'>
        <h3 className='text-center text-green-500 text-[28px] font-semibold pt-[30px]'>Services</h3>
        <div className="flex px-[150px] gap-[150px] mt-[30px] cursor-pointer">
            <div className="group w-[50%] min-h-[30vh] bg-white p-[15px] rounded-md shadow-sm hover:bg-green-500">
                <div className="w-full h-[40vh]">
                    <img src={img1} alt="" className='w-full h-full' />
                </div>
                <div className="mt-3">
                    <div className="flex items-center justify-between">
                        <h2 className='font-semibold text-[19px] group-hover:text-white'>Petrol Delivery</h2>
                        <small className='text-green-500 font-medium text-[15px] group-hover:text-black'>
                            {petrol ? petrol.petrol : 0} Rs
                        </small>
                    </div>
                    <p className='text-[#808080e4] mt-2 text-[12px] group-hover:text-slate-100'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magni 
                        quisquam neque id, deserunt fuga culpa pariatur consequuntur, voluptatibus
                         quam molestiae quae. Illo, numquam eaque quis laborum animi asperiores nobis.
                    </p>
                </div>
            </div>
            <div className="group w-[50%] min-h-[30vh] bg-white p-[15px] rounded-md shadow-sm hover:bg-green-500">
                <div className="w-full h-[40vh]">
                    <img src={img2} alt="" className='w-full h-full' />
                </div>
                <div className="mt-3">
                    <div className="flex items-center justify-between">
                        <h2 className='font-semibold text-[19px] group-hover:text-white'>Diesal Delivery</h2>
                        <small className='text-green-500 font-medium text-[15px] group-hover:text-black'>
                            {diesel ? diesel.diesel : 0} Rs
                        </small>
                    </div>
                    <p className='text-[#808080e4] mt-2 text-[12px] group-hover:text-slate-100'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magni 
                        quisquam neque id, deserunt fuga culpa pariatur consequuntur, voluptatibus
                         quam molestiae quae. Illo, numquam eaque quis laborum animi asperiores nobis.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services