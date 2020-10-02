import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const IncompleteTask = ({incompleteTask}) => {
  const {deleteTask} = useContext(GlobalContext);
  const {addComplete} = useContext(GlobalContext);
  const {incompleteTasks} = useContext(GlobalContext);

 const onSubmitDelete = (id) => {
    const deletedT = incompleteTasks.find((incompleteTask) => id == incompleteTask.id);
    let newCompleteTask = {id : 0, completeText: "", completeRating: 0};
    newCompleteTask.id = deletedT.id;
    newCompleteTask.completeText = deletedT.incompleteText;
    newCompleteTask.completeRating= deletedT.incompleteRating;
    deleteTask(id);
    addComplete(newCompleteTask);
}

  return (
        <li className = "task" >
        <span className = "task-name"> {incompleteTask.incompleteText}</span>
        <span className = "task-rating"> {incompleteTask.incompleteRating}</span>
        <button className = "delete-btn"
        onClick= {() => {
          onSubmitDelete(incompleteTask.id)
 
        }}>
          <i className="fas fa-check-square"></i>
        </button>
    </li>
    )
}

export default IncompleteTask
