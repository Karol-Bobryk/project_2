import "./TaskCardStyle.css";
import React from "react";
import deleteTasks from "../App.js"
const TaskCard=(props)=>{
    return <div className="taskCard">
        <h2>{props.task}</h2>
        <button onClick={props.func}>Delete</button>
    </div>
}
export default TaskCard;