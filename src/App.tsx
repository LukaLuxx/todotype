// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import "./App.css";
// import Task from "./components/Task";

// interface Item {
//     task: string;
//     deadline: number;
//     created: number;
//     checked: boolean;
//     key: string;
// }

// const App: React.FC = () => {
//     const storedItems = localStorage.getItem("todos");
//     const initialItems: Item[] = storedItems ? JSON.parse(storedItems) : [];
//     const [items, setItems] = useState<Item[]>(initialItems);
//     const [newTask, setNewTask] = useState<string>("");

//     const handleNewTaskChange = (
//         event: React.ChangeEvent<HTMLInputElement>
//     ) => {
//         setNewTask(event.target.value);
//     };

//     const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (newTask.trim() !== "") {
//             const newItem: Item = {
//                 task: newTask,
//                 deadline: Date.now(),
//                 created: Date.now(),
//                 checked: false,
//                 key: uuidv4(),
//             };
//             setItems([...items, newItem]);
//             setNewTask("");
//         }
//     };

//     const handleCheckTask = (index: number) => {
//         const newItems = [...items];
//         newItems[index].checked = !newItems[index].checked;
//         setItems(newItems);
//     };

//     const handleDeleteTask = (index: number) => {
//         const newItems = [...items];
//         newItems.splice(index, 1);
//         setItems(newItems);
//     };

//     React.useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(items));
//     }, [items]);

//     return (
//         <div className="App">
//             <h1>To-Do List</h1>
//             <div className="submit">
//                 <form onSubmit={handleNewTaskSubmit}>
//                     <input
//                         type="text"
//                         placeholder="New task"
//                         value={newTask}
//                         onChange={handleNewTaskChange}
//                     />
//                     <button type="submit">Add task</button>
//                 </form>
//             </div>
//             <div className="task-wrapper">
//                 <ul className="task-list">
//                     <h2>Pending</h2>
//                     {items.map((item, index) =>
//                         !item.checked ? (
//                             <li key={item.key}>
//                                 <Task
//                                     key={item.key}
//                                     task={item.task}
//                                     deadline={item.deadline}
//                                     created={item.created}
//                                     checked={item.checked}
//                                     handleCheck={() => handleCheckTask(index)}
//                                     handleDelete={() => handleDeleteTask(index)}
//                                     className="green"
//                                 />
//                                 <hr />
//                             </li>
//                         ) : null
//                     )}

//                     <h2>Completed</h2>
//                     {items.map((item, index) =>
//                         item.checked ? (
//                             <li key={item.key}>
//                                 <Task
//                                     key={item.key}
//                                     task={item.task}
//                                     deadline={item.deadline}
//                                     created={item.created}
//                                     checked={item.checked}
//                                     handleCheck={() => handleCheckTask(index)}
//                                     handleDelete={() => handleDeleteTask(index)}
//                                     className="green"
//                                 />
//                                 <hr />
//                             </li>
//                         ) : null
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default App;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Task from "./components/Task";

interface Item {
    task: string;
    deadline: string;
    created: string;
    checked: boolean;
    key: string;
}

const App: React.FC = () => {
    const storedItems = localStorage.getItem("todos");
    const initialItems: Item[] = storedItems ? JSON.parse(storedItems) : [];
    const [items, setItems] = useState<Item[]>(initialItems);
    const [newTask, setNewTask] = useState<string>("");
    const [newCreated, setNewCreated] = useState<string>("");
    const [newDeadline, setNewDeadline] = useState<string>("");

    const handleNewTaskChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewTask(event.target.value);
    };

    const handleNewCreatedChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewCreated(String(event.target.value));
    };

    const handleNewDeadlineChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewDeadline(String(event.target.value));
    };

    const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTask.trim() !== "") {
            const newItem: Item = {
                task: newTask,
                deadline: newDeadline,
                created: newCreated,
                checked: false,
                key: uuidv4(),
            };
            setItems([...items, newItem]);
            setNewTask("");
            setNewCreated("");
            setNewDeadline("");
        }
    };

    const handleCheckTask = (index: number) => {
        const newItems = [...items];
        newItems[index].checked = !newItems[index].checked;
        setItems(newItems);
    };

    const handleDeleteTask = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(items));
    }, [items]);

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className="submit">
                <form onSubmit={handleNewTaskSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="New task"
                            value={newTask}
                            onChange={handleNewTaskChange}
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Created"
                            value={newCreated}
                            onChange={handleNewCreatedChange}
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Deadline"
                            value={newDeadline}
                            onChange={handleNewDeadlineChange}
                        />
                    </div>
                    <button type="submit">Add task</button>
                </form>
            </div>

            <div className="task-wrapper">
                <ul className="task-list">
                    <h2>Pending</h2>
                    {items.map((item, index) =>
                        !item.checked ? (
                            <li key={item.key}>
                                <Task
                                    key={item.key}
                                    task={item.task}
                                    created={item.created}
                                    deadline={item.deadline}
                                    checked={item.checked}
                                    handleCheck={() => handleCheckTask(index)}
                                    handleDelete={() => handleDeleteTask(index)}
                                />
                                <hr />
                            </li>
                        ) : null
                    )}

                    <h2>Completed</h2>
                    {items.map((item, index) =>
                        item.checked ? (
                            <li key={item.key}>
                                <Task
                                    key={item.key}
                                    task={item.task}
                                    created={item.created}
                                    deadline={item.deadline}
                                    checked={item.checked}
                                    handleCheck={() => handleCheckTask(index)}
                                    handleDelete={() => handleDeleteTask(index)}
                                />
                                <hr />
                            </li>
                        ) : null
                    )}
                </ul>
            </div>
        </div>
    );
};

export default App;
