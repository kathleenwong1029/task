import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState.js"
import CompleteTask from "./CompleteTask.js";

const CompleteList = () => {
    const {completeTasks} = useContext(GlobalContext);
    return (
        <div className = "tasks tasks-complete">
            <h2>Completed Tasks</h2>
            <ul className = "task-list"></ul>
            {completeTasks.map(completeTask => (
            <CompleteTask key={completeTask.id}
                completeTask = {completeTask} />
           ))}
        </div>
    )
}

export default CompleteList