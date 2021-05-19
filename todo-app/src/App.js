import React, { useState } from 'react'

const App = () => {
  const [inputList, setInputList] = useState("Buy Apples");
  const [listArr, setListArr] = useState([]);

  const itemEvent = () => {

  }
  return(
    <>
      <div className="main-div">
        <div className="center-div"></div>
        <br />
        <h1>TODO LIST</h1>
        <br />
        <input type="text" placeholder="Add An Item" onChange={itemEvent}/>
        <button> + </button>

        <ol>
          {listArr.map((item)=>{
            <li>{item}</li>
          })}
        </ol>
      </div>
    </>
  )
}

export default App