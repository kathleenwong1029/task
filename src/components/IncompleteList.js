import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState.js"
import IncompleteTask from "./IncompleteTask.js";

const IncompleteList = () => {
    const {incompleteTasks} = useContext(GlobalContext);
    console.log(incompleteTasks);
    const myData = [...incompleteTasks];
    myData.sort(function(a, b) {
     if(a.incompleteRating < b.incompleteRating) return -1;
     if(a.incompleteRating > b.incompleteRating) return 1;
     return 0;
    })

    return (
        <div className = "tasks tasks-incomplete">
            <h2>Incomplete Tasks</h2>
            <ul className = "task-list"></ul>
            {myData.map(incompleteTask => (
            <IncompleteTask key={incompleteTask.id}
            incompleteTask = {incompleteTask} />
           ))}
        </div>
    )
}

export default IncompleteList
