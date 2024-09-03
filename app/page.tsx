'use client'
import { UNDERSCORE_NOT_FOUND_ROUTE_ENTRY } from "@/node_modules/next/dist/shared/lib/constants";
import Image from "next/image";
import styles from "./page.module.css";
// import Counter from "./components/counter/Counter"
import {Header} from "./components/header/Header"
import {TaskStatItem} from "./components/Taskstats/TaskStatItem"
import {TaskStats} from "./components/Taskstats/TaskStats"
import {TaskItem} from "./components/taskitem/TaskItem"
import { title } from 'process';
import { useState } from "react";
import { Task } from "./components/ts/Task";


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [completeCount, setCompleteCount] = useState(0)

  const taskCreatedSuccesfully = (task: Task) => {
    console.log();
    
    setTasks([...tasks, task])
    
  }
  const onDeleteClick = (taskToDelete: Task) => {
    const newTasks = tasks.filter((item) => taskToDelete.id !== item.id);

    setTasks(newTasks);
  }

  const OnTaskCompleted = (completedTask: Task, comp: boolean) => {
    if(comp) {
      setCompleteCount(completeCount + 1)
    }else{
      setCompleteCount(completeCount - 1)
    }
    const newTasks = tasks.map((task) => {
      if(task.id == completedTask.id) {
        return{
          ...task,
          completed: comp,
        }
      }
      return task;
    })
    setTasks(newTasks)
  }

  return (
      <div>
        <Header onTaskCreated={taskCreatedSuccesfully}></Header>
        <TaskStats
        total={tasks.length} 
        completed={completeCount}/>
        {tasks
        .sort((item1) => (item1.completed ? 1 : -1))
        .map((t) => 
        <div key={t.id}>
           <TaskItem onTaskCompleted={OnTaskCompleted} onDeleteClick={onDeleteClick} task={t}/> 
        </div>
        )}
      </div>
  );
}
