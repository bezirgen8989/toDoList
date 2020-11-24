import s from "./standartStyle.module.css";
import React, {useState} from "react";
import TaskComponent from "../TaskComponent/TaskComponent";
import FormToAddTask from "../FormToAddTask/FormToAddTask";

let StandardListComponent = (props) => {
    let [standardListArr, setStandardListArr] = useState([...props.standardListArr]);

    let addTaskFromCompo = () => {
        setStandardListArr([...props.standardListArr])
    }

    return (
        <div className={s.standardStyle}>
            <h1>Standard tasks list</h1>
            <FormToAddTask
                addTaskHOC={addTaskFromCompo}
                addTask={props.addTask}
                arrType={props.standardListArr}
            />
            {standardListArr.map((stanTask, index) => (<TaskComponent
                key={stanTask.id}
                task={stanTask.taskText}
                taskStatus={stanTask.taskStatus}
                onChangeFoo={() => {
                    props.changeStatus(stanTask.id, props.standardListArr);
                    setStandardListArr([...props.standardListArr]);
                }}
                deleteFoo={() => {
                    props.deleteTask(props.standardListArr, index)
                    setStandardListArr([...props.standardListArr]);
                }}
            />))}
        </div>
    )
}

export default StandardListComponent;