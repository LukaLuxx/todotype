// // export interface Task {
// //     taskName: string;
// //     deadline: number;
// //     created: number;
// //     checkTask: boolean;
// // }

// interface TaskProps {
//     task: string;
//     deadline: number;
//     created: number;
//     checked: boolean;
//     handleCheck: () => void;
//     handleDelete: () => void;
// }

// const Task: React.FC<TaskProps> = ({ task, deadline, created }) => {
//     return (
//         <div>
//             <p>Task: {task}</p>
//             <p>Deadline: {deadline}</p>
//             <p>Created: {created}</p>
//             <input type="checkbox" checked={checked} onChange={handleCheck} />
//             <button onClick={handleDelete}>Delete</button>
//         </div>
//     );
// };

// export default Task;

import React from "react";

export interface TaskProps {
    key: any;
    task: string;
    deadline: number;
    created: number;
    checked: boolean;
    handleCheck: () => void;
    handleDelete: () => void;
    className?: string;
}

const Task: React.FC<TaskProps> = ({
    task,
    deadline,
    created,
    checked,
    handleCheck,
    handleDelete,
}) => {
    return (
        <div>
            <h3 className="blue">{task}</h3>
            <p className="red">Deadline: {deadline}</p>
            <p className="green">Created: {created}</p>
            <input type="checkbox" checked={checked} onChange={handleCheck} />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Task;
