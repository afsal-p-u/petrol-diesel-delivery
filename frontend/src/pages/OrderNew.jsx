import React from 'react'
import Navbar from '../components/Navbar'
import NewOrder from '../components/NewOrder'

const OrderNew = () => {
  return (
    <>
        <Navbar menu='auth' />
        <NewOrder />
    </>
  )
}

export default OrderNew