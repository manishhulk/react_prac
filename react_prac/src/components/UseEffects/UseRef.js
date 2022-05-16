import React, { useRef, useState } from 'react'

const UseRef = () => {
  const name = useRef(null);
  const [status, setStatus] = useState(true)

  const submitData = (e) => {
    e.preventDefault();
    const nameData = name.current.value;
    nameData != "" ? setStatus(false) : alert('enter value');
  }

  return (
    <>
      <form onSubmit={submitData}>
        <input type="text" ref={name} />
        <button>Submit</button>
      </form>
      {status && `<div>This is the input value : ${name.current.value}</div>`}
    </>
  )
}

export default UseRef