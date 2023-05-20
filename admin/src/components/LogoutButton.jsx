import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LogoutButton = () => {
    const {setAdmin} = useContext(AuthContext)

  return (
    <button 
        className='absolute top-0 right-[20px] px-[15px] py-[5px] rounded-md bg-green-500 mt-2 text-white
        font-semibold'
        onClick={() => setAdmin(null)}
    >
        Logout
    </button>
  )
}

export default LogoutButton