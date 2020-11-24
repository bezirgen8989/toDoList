import React from "react";
import './App.css';
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterCompo";
import NavComponent from "./components/Navigation/NavComponent";
import ContentComponent from "./components/Content/ContentComponent";



function App(props) {
    return (
        <div className="App">
            <HeaderComponent/>
            <FooterComponent/>
            <NavComponent/>
            <ContentComponent
                state={props.state.getState()}
                addTask={props.state.addTask}
                changeStatus={props.state.changeStatus}
                deleteTask={props.state.deleteTask}
            />
        </div>
    );
}

export default App;
