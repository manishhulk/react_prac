import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber, decNumber, multNumber, divNumber } from '../action/index'

const ReactRedux = () => {
  const myState = useSelector(state => state.changeTheNumber);
  const myOtherState = useSelector(state => state.multTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-center">This is React Redux</h1>
      <div className="align-items-center d-flex justify-content-center">
        <button className="btn btn-primary" onClick={() => dispatch(decNumber())}>-</button>
        <span className="d-inline-block mx-2">{myState}</span>
        <button className="btn btn-primary" onClick={() => dispatch(incNumber())}>+</button>
      </div>


      
      <div className="align-items-center d-flex justify-content-center my-5">
        <button className="btn btn-primary" onClick={() => dispatch(divNumber())}>/</button>
        <span className="d-inline-block mx-2">{myOtherState}</span>
        <button className="btn btn-primary" onClick={() => dispatch(multNumber())}>*</button>
      </div>
    </>
  )
}

export default ReactRedux