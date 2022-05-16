import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import About from './About'

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </>
  )
}

export default Home