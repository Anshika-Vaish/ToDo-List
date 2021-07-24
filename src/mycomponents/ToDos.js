import React from 'react'
import {Todo} from '../mycomponents/Todo';


export const ToDos = (props) => {

    return (
        <div className="container">
            <h3 className=" my=3">Todos List</h3>
            {props.todos.length==0 ?"No ToDos to Display":
            props.todos.map((todo)=>{
               return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
               
               
            })}
            </div>
    )
}
