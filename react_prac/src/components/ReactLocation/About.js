import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  console.table(location);
  return (
    <>
      <div>Hello This is {location.pathname.replace('/', '')} page</div>
      {
        location.pathname === "/about/manish" ?
          <p>Hello Manish, Good To See You Again</p> :
          <p>Hello There, Please Login.</p>
      }
    </>
  )
}

export default About