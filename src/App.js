import { useState } from "react";
import List from "./List";
import React from 'react';
import "./style.css"



function App() {

  const [data, setData] = useState({})
  const [list, setList] = useState([])
  const handleInput = (e) => {
    let { value } = e.target
    setData({ desc: value })
  }

  const getSubmit = (e) => {
    e.preventDefault();

    let lastId = 0
    if (list.length > 0) {
      lastId = list.sort((a, b) => a.id - b.id);
      console.log(lastId);
      lastId = lastId.at(-1).id + 1

    }
    else {
      lastId = lastId + 1
    }

    setList([...list, { ...data, id: lastId }])
    e.target.reset()
  }
  console.log(list);


  const delAlert = (id) => {
    setList(list.filter((e) => e.id !== id))
  }

  const editItem = (e) => {
    let temp = [...list];

    let el = temp.find((a) => a.id === e.id);
    // let index = temp.indexOf(el)
    el.desc = e.value;
    // temp.splice(index, 1, el);
    setList(temp)


  }


  return (
    <>


      <div className="container py-3">
        <form onSubmit={(e) => getSubmit(e)} >
          <div className="row">
            <div className="col-8">
              <input type="text" className="form-control" onChange={(e) => handleInput(e)} />
            </div>
            <div className="col-4">
              <button className="btn btn-primary w-100">
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="row mt-3">
          {
            list.map((index, key) => (

              <List key={key} value={index.desc} id={index.id} sil={delAlert} editItem={editItem} />
            ))
          }
        </div>
      </div>
    </>)
}


export default App