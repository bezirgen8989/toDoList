let store = {
    _state: {
        standardListArr: [],
        favoriteListArr: [],
        urgentListArr: [],
    },
    getState(){
        return this._state
    },
    addTask(newTaskText, arr){
        // let allTaskText = [...[...state.standardListArr, ...state.favoriteListArr, ...state.urgentListArr].map(task => task.taskText)]
        let allTaskText = [...arr.map(task => task.taskText)]

        if (allTaskText.includes(newTaskText)){
            alert ('You have such task! Check your list!')
        }else if (arr.length >= 25){
            alert ('Limit test')
        } else {
            arr.push({id: Date.now(), taskText: newTaskText, taskStatus: false})
        }
        return arr;
    },

    changeStatus (idCompo, propsArr){
        propsArr.filter(standard => {
            if (standard.id === idCompo) {
                standard.taskStatus = !standard.taskStatus;
                console.log(idCompo)
            }
            return standard;
        })
    },

    deleteTask (propsArr, index){
        propsArr.splice(index, 1)
    }
}

export default store;

window.store = store