import React, { useContext }from 'react'
import { BioData } from './ComA'

const ComC = () => {
  const data = useContext(BioData)
  return (
    <h1>ComC {data}</h1>
  )
}

export default ComC