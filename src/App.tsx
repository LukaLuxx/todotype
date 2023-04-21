import React from "react";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="todo-text">
                <h1>Taskmaster</h1>
                <div className="todo-input">
                    <button className="blue">Task &rarr; </button>
                    <input type="text" placeholder="Write your task here..." />
                    <button className="red">Created:</button>
                    <input
                        type="number"
                        name="created"
                        id="created"
                        placeholder="Write your date here..."
                    />
                    <button className="green">Due date:</button>
                    <input
                        type="number"
                        name="due"
                        id="due"
                        placeholder="Write your due date here..."
                    />
                </div>
            </div>
            <div className="task-wrapper">
                <div className="task-list">
                    <h2>TODOs &darr;</h2>
                    <ul>
                        <li className="blue">
                            {" "}
                            <b>Task:</b>
                        </li>
                        <li className="red">
                            <b>Created:</b>
                        </li>
                        <li className="green">
                            <b>Due:</b>
                        </li>
                        <input type="checkbox" id="task1" name="task1" />
                        <label htmlFor="task1">TODO done</label>
                        <hr />
                        <button className="erase-todo">delete</button>
                        <hr />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
