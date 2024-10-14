import React from 'react'
import './index.css'
import {useTodos} from "../../hooks/useTodoContext";

export default function Header() {
    const {addTask} = useTodos();

    const [taskName, setTaskName] = React.useState<string>('')

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask(taskName);
            setTaskName('')
        }
    }

    return (
        <div className="todo-header">
            <input type="text" placeholder="Enter task name"
                   onChange={e => setTaskName(e.target.value)}
                   onKeyDown={handleKeyDown}
                   value={taskName}
            />
        </div>
    )
}