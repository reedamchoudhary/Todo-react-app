import React, { useState } from 'react'
import ToDoList from "./ToDoList"

const App = () => {
  var [inputList, setInputList] = useState("Buy Apples");
  var [listArr, setListArr] = useState([]);

  
  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const incrementItem = () => {
    // console.log("clicked")
    setListArr((oldArray)=>{
      return [...oldArray, inputList]
    })
    setInputList("")
    
  }

  const deleteItem = () => {
    console.log("deleted")
}


  return(
    <>
      <div className="main-div">
        <div className="center-div"></div>
        <br />
        <h1>TODO LIST</h1>
        <br />
        <input type="text" placeholder="Add An Item" onChange={itemEvent} value={inputList}/>
        <button onClick={incrementItem}> + </button>

        <ol>
        {/* <li>Buy Apples</li> */}
          {listArr.map((item, index)=>{
            return <ToDoList text = {item} id ={index} key = {index} onSelect = {deleteItem}/>
          })}
        </ol>
      </div>
    </>
  )
}

export default App