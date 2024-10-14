import React, {createContext, useEffect, useState} from 'react';
import {generateRandom10DigitNumber} from "../utils/random";

export class Todo {
    id: number;
    title: string;
    finished: boolean;

    constructor(title: string, finished: boolean) {
        this.id = generateRandom10DigitNumber();
        this.title = title;
        this.finished = finished;
    }
}

export const TodoContext = createContext<{
    todos: Todo[];
    addTask: (taskName: string) => void;
    deleteFinishedTasks: () => void;
    toggleFinished: (id: number) => void;
    toggleAll: (v: boolean) => void;
    onDelete: (id: number) => void;
} | undefined>(undefined);

export const TodoProvider = ({children}: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    async function getTodos() {
        const res = await fetch('http://localhost:3001/todos');
        const data = await res.json();
        setTodos(data);
    }

    useEffect(() => {
        getTodos();
    }, []);

    const addTask = (taskName: string) => {
        if (taskName.trim()) {
            const newTodos = [...todos, new Todo(taskName, false)];
            setTodos(newTodos);
        }
    };

    const deleteFinishedTasks = () => {
        const newTodos = todos.filter(todo => !todo.finished);
        setTodos(newTodos);
    };

    const toggleFinished = (id: number) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.finished = !todo.finished;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const toggleAll = (v: boolean) => {
        const newTodos = todos.map(todo => {
            todo.finished = v;
            return todo;
        });
        setTodos(newTodos);
    };

    const onDelete = (id: number) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{todos, addTask, deleteFinishedTasks, toggleFinished, toggleAll, onDelete}}>
            {children}
        </TodoContext.Provider>
    );
};