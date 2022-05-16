import React, { useReducer }from 'react'

const initialState = 0;

const reducer = (state, action) => {
  action.type === "Inc" && state++;
  action.type === "Dec" && state--;
  return state;
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{state}</div>
      <button onClick={ () => dispatch({type: "Inc"})}>Inc</button>
      <button onClick={ () => dispatch({type: "Dec"})}>Dec</button>
    </>
  )
}

export default UseReducer