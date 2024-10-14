import React from 'react'
import './index.css'
import {Todo} from "../../contexts/todoContext";
import {useTodos} from "../../hooks/useTodoContext";

type PropsType = {
    todo: Todo
}

export default function Item(props: PropsType) {
    const {todo} = props;
    const {onDelete, toggleFinished} = useTodos();

    const changeHandler = () => {
        toggleFinished(todo.id);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            onDelete(todo.id);
        }
    }

    return (
        <li>
            <label>
                <input type="checkbox" onChange={changeHandler} checked={todo.finished || false}/>
                <span>{todo.title}</span>
            </label>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </li>
    )
}