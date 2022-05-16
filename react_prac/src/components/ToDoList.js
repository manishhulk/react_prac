import React, { useState } from 'react'

const ToDoList = () => {

  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    item !== "" && setItemList([...itemList, item]);
    setItem('')
  } 

  const removeItem = id => {
    let itemNewList = itemList.filter((item, ind) => {
      return ind !== id;
    })
    setItemList(itemNewList);
  }

  return (
    <>
      <h1>Add ToDo List</h1>
      <form action="" onSubmit={submitForm}>
        <input type="text" placeholder="Add To Do List" className="form-control" value={item} onChange={(e) => setItem(e.target.value)} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {
        itemList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr className="text-center">
                <th>Index</th>
                <th>Item</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
            {itemList.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td><button type="submit" className="btn btn-outline-danger btn-sm" onClick={ () => removeItem(index) }>Remove</button></td>
                </tr>
              )
            })}
            </tbody>
            </table>
        )
      }

      <button type="submit" className="btn btn-danger" onClick={() => setItemList([])} >Remove All</button>
    </>
  )
}

export default ToDoList