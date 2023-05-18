import {AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full h-[9vh] px-[50px] bg-green-500 flex justify-between items-center'>
        <div className="text-[14px] text-white font-medium">© Copyright 2023 EcoFuel All Rights Reserved.</div>
        <div className="flex item-center">
            <AiFillTwitterSquare className='mr-[20px] text-white text-[25px] cursor-pointer' />
            <AiFillFacebook className='mr-[20px] text-white text-[25px] cursor-pointer' />
            <AiFillInstagram className='mr-[20px] text-white text-[25px] cursor-pointer' />
            <AiFillYoutube className='mr-[20px] text-white text-[25px] cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer