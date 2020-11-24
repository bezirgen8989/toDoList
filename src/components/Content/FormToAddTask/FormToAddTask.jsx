import React, {useState} from "react";
import s from './formToAddStyle.module.css'

let FormToAddTask = (props)=>{
    let [inputVal, setInputVal] = useState('');

    let inputChangeFoo = (e)=>setInputVal(e.currentTarget.value)

    return(
        <span className={s.formStyle}>
            <input
                type='text'
                value={inputVal}
                onChange={inputChangeFoo}
                placeholder={'Write your task'}
            />
            <button onClick={
                ()=> {
                    if (inputVal === ''){
                        alert ('You can`t add empty task!')
                    }else if (inputVal.length > 70){
                        alert ('Too many characters, rephrase your new task to add!')
                    } else {
                        props.addTaskHOC(props.addTask(inputVal, props.arrType))
                        setInputVal('')
                    }
                }
            }>addTask</button>
        </span>
    )
}

export default FormToAddTask;