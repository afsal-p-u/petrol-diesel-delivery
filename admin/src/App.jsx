import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'

import Home from "./pages/Home"
import Login from "./pages/Login"
import { AuthContext } from './context/AuthContext'


function App() {
  const {admin} = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/login' element={admin ? <Navigate to='/' /> : <Login />} />
      <Route path='/' element={admin ? <Home /> : <Navigate to='/login' />} />
    </Routes>
  )
}

export default App
