import React from 'react'
import { useState } from 'react'

function List({ value, id, sil, editItem }) {

    const [check, setCheck] = useState(false);
    const [change, setChange] = useState(false)
    const [data, setData] = useState({})


    const handleEdit = (id, value) => {
        setChange(!change)
        setData({ id, value })
    }
    console.log(data)


    const handleSave = () => {
        setChange(!change);
        editItem(data);
    }

    const handleInput = (e) => {
        const { value } = e.target
        setData({ ...data, value: value })
        console.log("2", data);
    }

    return (
        <div className="col-12">
            <div className="alert alert-primary" role="alert">
                <div className="row">
                    <div className="col-8 d-flex align-items-center">

                        {
                            change ?
                                <form className='w-50' > <input type="text" className='form-control ' defaultValue={value} onChange={(e) => handleInput(e)} /></form>
                                : <p style={{ margin: "0", textDecoration: check ? "line-through" : "none" }}>{value}</p>
                        }


                    </div>
                    <div className="col-4 d-flex ">
                        <div className="col-12 d-flex justify-content-end">
                            <div className="btn btn-group w-100">
                                {
                                    change ? <button className="btn btn-success" onClick={() => handleSave()} ><i class="fa-solid fa-check-double"></i></button>
                                        : <button className="btn btn-warning" onClick={() => handleEdit(id, value)} ><i class="fa-solid fa-arrows-rotate"></i></button>
                                }


                                <button onClick={() => sil(id)} className="btn btn-danger">x</button>
                                <button className="btn btn-success" onClick={() => setCheck(!check)} ><i class="fa-solid fa-check"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List