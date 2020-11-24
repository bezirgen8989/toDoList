import React from "react";
import s from "./navStyle.module.css";
import {NavLink} from "react-router-dom";


function NavComponent() {
    return (
        <div className={s.navigationStyle}>
            <h1>Navigation</h1>
            <div><NavLink to={'/standardsList'} activeClassName={s.active}>Standard tasks list</NavLink></div>
            <div><NavLink to={'/favoritesTask'} activeClassName={s.active}>Favorite tasks list</NavLink></div>
            <div><NavLink to={'/urgentTasks'} activeClassName={s.active}>Urgent tasks list</NavLink></div>
            <div><NavLink to={'/allTasks'} activeClassName={s.active}>All tasks list</NavLink><br/></div>
        </div>
    );
}

export default NavComponent;
