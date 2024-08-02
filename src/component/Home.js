import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    
    <>
       <button
        onClick={() => {
          navigate('/cart')
        }}
      >
        Products
      </button>
      <Outlet></Outlet>
    </>
    
  )
}

export default Home;