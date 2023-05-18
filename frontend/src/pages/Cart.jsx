import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'

const Cart = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getAllOrders = () => {
            axios.get(`http://localhost:5000/api/order`).then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        getAllOrders()
    }, [])
    
    const handleCancel = (e, id) => {
        e.preventDefault()

        axios.delete(`http://localhost:5000/api/order/${id}`).then((res) => {
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
        <Navbar />
        <div className="w-full h-[90vh] py-[15px] px-[30px]">
            <div className="mt-5 w-[50%] h-full flex flex-col flex-wrap">
                <h3 className='font-medium text-[20px] mb-[15px]'>Orders</h3>
                {data?.map((item) => (
                    <div 
                        className="flex items-center bg-green-500 justify-between px-[20px] py-[20px] shadow-md
                        rounded-md mb-2"
                        key={item?._id}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className='text-[18px] font-semibold'>{item?.category}</h3>
                            <small className='ml-[30px] text-[18px] font-medium text-white'>{item?.total} Rs</small>
                        </div>
                        <div className="text-[14px] font-medium">
                            Estimated Arrival Time 10 Minutes...
                        </div>
                        <div className="">
                            <button
                                className='px-[20px] py-[6px] bg-[#eee] rounded-md text-[12px] font-medium
                                hover:bg-[#fff] hover:text-green-500'
                                onClick={(e) => handleCancel(e, item._id)}
                            >Cancel</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Cart