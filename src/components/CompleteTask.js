import React from 'react'

const CompleteTask = ({completeTask}) => {
    return (
        <li className = "task" >
        <span className = "task-name"> {completeTask.completeText}</span>
        <span className = "task-rating"> {completeTask.completeRating}</span>
    </li>
    )
}

export default CompleteTask