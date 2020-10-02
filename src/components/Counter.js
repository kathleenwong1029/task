import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState.js"

const Counter = () => {

    const {incompleteTasks,completeTasks} = useContext(GlobalContext);
    const tasksLeft = incompleteTasks.length;
    const tasksDone = completeTasks.length;
    return (
        <div className = "complete-incomplete">
             <div className = "plus">
                <h2>Tasks Left:</h2>
                <p>{tasksLeft}</p>
            </div>
            <div className = "minus">
                <h2>Tasks Done:</h2>
                <p>{tasksDone}</p>
            </div>
        </div>
    )
}

export default Counter;
