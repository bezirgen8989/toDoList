import React from "react";
import s from "./allListStyle.module.css"
import TaskComponent from "../TaskComponent/TaskComponent";


let AllListComponent = ({allTasksArr})=>{

    let all = [
        ...allTasksArr.favoriteListArr,
        ...allTasksArr.standardListArr,
        ...allTasksArr.urgentListArr
    ]

    return(
        <div className={all.length < 25 ? s.allListStyle : s.allListStyle_scroll}>
            <h1>All tasks list</h1>
                {all.map(
                    task=>(<TaskComponent
                        key={task.id}
                        task={task.taskText}
                        taskStatus={task.taskStatus}
                        onChangeFoo={()=>{
                            alert(`Here you can't change tasks status! This page only to show!`)
                        }}
                    />)
                )}
        </div>
    )
}

export default AllListComponent;
