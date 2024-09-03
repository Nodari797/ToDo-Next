import { useState } from 'react';
import { Task } from '../ts/Task';
import './Header.css'

let id = 0;
interface Props {
    onTaskCreated: (task: Task) => void;
}
export function Header(props: Props) {
    const [inputTitle, setTitle] = useState("");

    const taskCreated = () => {

        const task: Task = {
            title: inputTitle,
            completed: false,
            id
        }
        id++;

    props.onTaskCreated(task)
    setTitle("")
    };
    let test = 0
    return(
        <div className='head'>
            <div className='logo'>
                <img src="/image/logo.png" alt="logo" />
                </div>
            <div className='search'>
                <input className='input' placeholder='create task' type="text" 
                value={inputTitle} 
                onChange = {(e) => setTitle(e.target.value)} />
                <button onClick={taskCreated} className='btn'>damateba</button>
            </div>
        </div>
    )
}