import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'

import './App.css'
import Home from './pages/Home'
import OrderNew from './pages/OrderNew'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthContext } from './context/AuthContext'
import Cart from './pages/Cart'

function App() {
  const {user} = useContext(AuthContext)

  console.log(user)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
      <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
      <Route path='/new' element={<OrderNew />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App
