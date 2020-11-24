import React from "react";
import s from "./contentStyle.module.css"

import StandardListComponent from "./StandartPage/StandartListComponent";
import FavoriteListComponent from "./FavoritePage/FavoriteListComponent";
import UrgentListComponent from "./UrgentPage/UrgentListComponent";
import AllListComponent from "./AllTasksPage/AllTasksComponent";
import {Route} from "react-router-dom";

function ContentComponent(props) {
    return (
        <div className={s.contentStyle}>

            <div className={s.routingBox}>
                <Route path={'/standardsList'} render={() => (
                    <StandardListComponent
                        standardListArr={props.state.standardListArr}
                        addTask={props.addTask}
                        changeStatus={props.changeStatus}
                        deleteTask={props.deleteTask}
                    />)}/>
                <Route path={'/favoritesTask'} render={() => (
                    <FavoriteListComponent
                        favoriteListArr={props.state.favoriteListArr}
                        addTask={props.addTask}
                        changeStatus={props.changeStatus}
                        deleteTask={props.deleteTask}
                    />)}/>
                <Route path={'/urgentTasks'} render={() => (
                    <UrgentListComponent
                        urgentListArr={props.state.urgentListArr}
                        addTask={props.addTask}
                        changeStatus={props.changeStatus}
                        deleteTask={props.deleteTask}
                    />)}/>
                <Route path={'/allTasks'} render={() => (
                    <AllListComponent allTasksArr={props.state}/>)}/>
            </div>
        </div>
    );
}

export default ContentComponent;
