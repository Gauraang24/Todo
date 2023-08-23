import React, { useState } from 'react'
import Logo from "../images/todo.jpeg"
import List from './List'

const Todo = () => {

    const [list, setList] = useState("mango")
    const [list1, setList1] = useState([])


    const ClickEvent = () => {
        if (!list) {

        } else {
            setList1([...list1, list])
            setList('')
        }
    }

    const deleteItems = (id) => {
        
        const filterDate = list1.filter((elem,index)=>{
            return index !==id
        })

        setList1(filterDate)

    }

    const removeAll=()=>{
        setList1([])
    }





    return (
        <>
            <div className='main_div'>
                <div className='child-div'>
                    <figure className='figure_div'>
                        <img src={Logo} alt="" />
                    </figure>
                    <h1>Add Your List Here</h1>

                    <div className='inputbar'>
                        <input type="text" placeholder='Add items...' value={list} onChange={(e) => { setList(e.target.value) }} />
                        <button onClick={ClickEvent}>+</button>
                    </div>


                    {list1.map((val, index) => {
                        return <List name={val} key={index} id={index} delete={deleteItems} />
                    })}

                    <button className='checkList' onClick={removeAll} >Remove All</button>


                </div>
            </div>
        </>
    )
}

export default Todo
