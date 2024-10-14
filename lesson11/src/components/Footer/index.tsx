import {ChangeEvent, useEffect, useState} from 'react'
import './index.css'
import {useTodos} from "../../hooks/useTodoContext";

export default function Footer() {
    const {todos, deleteFinishedTasks, toggleAll} = useTodos();
    const [doneTodos, setDoneTodos] = useState<number>(0);
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        setDoneTodos(prev => todos.filter(todo => todo.finished).length);
    }, [todos]);

    useEffect(() => {
        setChecked(todos.length !== 0 && todos.length === doneTodos);
    }, [doneTodos, todos]);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        toggleAll(e.target.checked);
    };

    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={handleChange} checked={checked} />
            </label>
            <span>
                <span>Finished {doneTodos}</span> / total {todos.length}
            </span>
            <button className="btn btn-danger" onClick={deleteFinishedTasks}>Delete Finished Tasks</button>
        </div>
    )
}