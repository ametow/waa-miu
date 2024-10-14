import React from 'react'
import Item from "../Item";
import "./index.css"
import {useTodos} from "../../hooks/useTodoContext";

export default function List() {
    const {todos} = useTodos();
    return (
        <ul className="todo-main">
            {
                todos.map(todo => <Item key={todo.id} todo={todo} />)
            }
        </ul>
    )
}