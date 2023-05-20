import React from 'react'
import Orders from '../components/Orders'
import Completed from '../components/Completed'

const AllRides = () => {
  return (
    <div className='w-full h-[100vh] flex px-[20px] pt-[80px] pb-[20px]'>
        <Orders />
        <Completed />
    </div>
  )
}

export default AllRides