import React from "react";
import s from "./taskStyle.module.css";

let TaskComponent = (props) => {
    return (
        <span className={!props.taskStatus? s.taskStyle : s.taskStyle_done} onClick={props.onChangeFoo}>
            <input
                type={'checkbox'}
                checked={props.taskStatus}
                onChange={props.onChangeFoo}
                onClick={props.onChangeFoo}
            />
            <span >{props.task}</span>
            <button onClick={props.deleteFoo}>Delete task</button>
        </span>
    )
}
export default TaskComponent;