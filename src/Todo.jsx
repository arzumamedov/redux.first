import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './todoSlices'
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    const todo = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    return (
        <>
            <h1>Todo</h1>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={()=>{
                dispatch(addTodo({value:input,id:uuidv4()}));
                setInput('')
            }}>Add</button>
            <ul>
            {todo.map((x,i) => <li key={i} >{x.value} <button onClick={()=>dispatch(removeTodo(x.id))}>Remove</button></li>)}
            </ul>
           
        </>
    )
}

export default Todo