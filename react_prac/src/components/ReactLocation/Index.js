import React from 'react'
import { useLocation } from 'react-router-dom'

const Index = () => {
  const location = useLocation();
  return (
    <div>Hello This is {location.pathname.replace('/', '')} page</div>
  )
}

export default Index