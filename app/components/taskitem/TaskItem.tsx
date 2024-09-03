import { title } from "process"
import "./TaskItem.css"
import { Task } from '../ts/Task';

interface Props {
    task: Task;
    onDeleteClick: (task: Task) => void;
    onTaskCompleted: (task: Task, completed: boolean) => void;
}
export function TaskItem({task, onDeleteClick, onTaskCompleted}: Props) {

    return(
        <div className="task">
            <div className="item">
                <input onChange={(e) => {
                    onTaskCompleted(task, e.target.checked)
                }} 
                type="checkbox" 
                defaultChecked={task.completed} />
                <p 
                className={`${task.completed ? "ts" : ""}`}>
                {task.title}
                </p>
            </div>
            <button onClick={() => {
                onDeleteClick(task)
            }}
            >Trash</button>
        </div>
    )
}