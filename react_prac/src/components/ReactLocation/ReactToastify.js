import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastify = () => {

  const diffTost = () => {
    toast.success("Wow so easy!");
  }

  return (
    <>
      <h1>Click TO Toast</h1>
      <button onClick={diffTost} className="btn btn-primary">
        Click To Login
      </button>
      <ToastContainer 
        position="top-center"
      />
    </>
  )
}

export default ReactToastify