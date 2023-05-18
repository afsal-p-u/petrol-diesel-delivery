import { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AuthContext } from '../context/AuthContext'

const Navbar = ({menu}) => {
  const {user, setUser} = useContext(AuthContext)

  return (
    <div className='w-full h-[9vh] flex items-center bg-[#eee] px-[30px] justify-between'>
      <div className="text-[20px] font-bold tracking-wider">
        <span className='text-green-500 text-[25px]'>E</span>coFuel
      </div>
      <div className="flex items-center">
        <a className='mr-[25px] font-semibold hover:text-green-500' href="/">Home</a>
        {!menu  && (
          <>
            <a className='mr-[25px] font-semibold hover:text-green-500' href="#services">Services</a>
            {/* <a className='mr-[25px] font-semibold hover:text-green-500' href="#features">Features</a> */}
          </>
        )}
        {user ? (
          <>
            <a className='mr-[60px] font-semibold hover:text-green-500' href="/new">Order New</a>
            <button 
              className='mr-[25px] font-semibold hover:text-green-500'
              onClick={() => setUser(null)}
            >
              Logout
            </button>
            <a className='ml-[25px] font-semibold hover:text-green-500' href="/cart">
              <AiOutlineShoppingCart size={25} className='text-green-500' />
            </a>
          </>
        ) : (
          <div className='ml-[40px]'>
            <a className='mr-[25px] font-semibold hover:text-green-500' href="/login">Login</a>
            <a className='mr-[25px] font-semibold hover:text-green-500' href="/register">Register</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar