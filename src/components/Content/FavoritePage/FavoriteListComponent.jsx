import s from "./favoriteStyle.module.css";
import React, {useState} from "react";
import TaskComponent from "../TaskComponent/TaskComponent";
import FormToAddTask from "../FormToAddTask/FormToAddTask";

let FavoriteListComponent = (props) => {
    let [favoriteListArr, setFavoriteListArr] = useState([...props.favoriteListArr]);

    let addTaskFromCompo = () => {
        setFavoriteListArr([...props.favoriteListArr])
    }

    return (
        <div className={s.favoriteStyle}>
            <h1>Favorite tasks list</h1>
            <FormToAddTask
                addTaskHOC={addTaskFromCompo}
                addTask={props.addTask}
                arrType={props.favoriteListArr}
            />
            {favoriteListArr.map((favTask, index) => (<TaskComponent
                key={favTask.id}
                task={favTask.taskText}
                taskStatus={favTask.taskStatus}
                onChangeFoo={() => {
                    props.changeStatus(favTask.id, props.favoriteListArr);
                    setFavoriteListArr([...props.favoriteListArr]);
                }}
                deleteFoo={() => {
                    props.deleteTask(props.favoriteListArr, index)
                    setFavoriteListArr([...props.favoriteListArr]);
                }}
            />))}
        </div>
    )
}
export default FavoriteListComponent;