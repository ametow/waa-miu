import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import List from "./components/List";
import Header from "./components/Header";
import {TodoProvider} from "./contexts/todoContext";


function App() {
    return (
        <TodoProvider>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
