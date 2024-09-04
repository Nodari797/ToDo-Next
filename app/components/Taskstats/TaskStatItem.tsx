import { title } from "process";
import "./TaskStatItem.css"
interface Props{
    title: string;
    amount: string;
}
export function TaskStatItem({title, amount}: Props) {
    return(
        <div className="item">
            <p className="assignment">{title}</p>
            <span className="pass">{amount}</span>
        </div>
    )
}