import React, { useState, useEffect } from 'react'

const UseEffects2 = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const actualWidth = () => {
    setWindowSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', actualWidth);
    return () => {
      window.removeEventListener('resize', actualWidth);
    }
  })
  
  return (
    <>
      <div>The Actual Size Of The Window Is: </div>
      <h1>{windowSize}</h1>
    </>
  )
}

export default UseEffects2