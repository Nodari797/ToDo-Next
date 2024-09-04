import {TaskStatItem} from "./TaskStatItem"
import "./TaskStats.css"

interface Props {
    total: number;
    completed: number;
}

export function TaskStats(props: Props) {
    return(
        <div className="title">
            <div className="tasks">
                <TaskStatItem title="დავალებები" amount={String(props.total)}/>
                <TaskStatItem title="დასრულებული" amount={`${props.completed}/${props.total}`}/>
            </div>
        </div>
    )
}