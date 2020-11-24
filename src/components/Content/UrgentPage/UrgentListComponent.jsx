import React, {useState} from "react";
import s from "./urgentStyle.module.css";
import TaskComponent from "../TaskComponent/TaskComponent";
import FormToAddTask from "../FormToAddTask/FormToAddTask";

let UrgentListComponent = (props) => {
    let [urgentListArr, setUrgentListArr] = useState([...props.urgentListArr]);

    let addTaskFromCompo = () => {
        setUrgentListArr([...props.urgentListArr])
    }
    return (
        <div className={s.urgentStyle}>
            <h1>Urgent tasks list</h1>
            <FormToAddTask
                addTaskHOC={addTaskFromCompo}
                addTask={props.addTask}
                arrType={props.urgentListArr}
            />
            {urgentListArr.map((urgTask, index) => (<TaskComponent
                key={urgTask.id}
                task={urgTask.taskText}
                taskStatus={urgTask.taskStatus}
                onChangeFoo={() => {
                    props.changeStatus(urgTask.id, props.urgentListArr);
                    setUrgentListArr([...props.urgentListArr]);
                }}
                deleteFoo={() => {
                    props.deleteTask(props.urgentListArr, index)
                    setUrgentListArr([...props.urgentListArr]);
                }}
            />))}
        </div>
    )
}

export default UrgentListComponent;