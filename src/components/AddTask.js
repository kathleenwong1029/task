import React,{useState,useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {GlobalContext} from '../context/GlobalState'

const AddTask = () => {

    const {addTask} = useContext(GlobalContext);

    const[incomplete,setIncomplete] = useState({
        incompleteText : "",
        incompleteRating: "",
    })

    const{incompleteText,incompleteRating} = incomplete
    const onChangeIncomplete = e => {
        setIncomplete({...incomplete,[e.target.name]: e.target.value});
        console.log(incomplete);

    }

    const onSubmitIncomplete = e => {
        e.preventDefault();
        if(incompleteText !== ""){
        const newIncompleteTask = {
            id:uuidv4(),
            incompleteText,
            incompleteRating: incompleteRating * 1,
        };
        //console.log(newIncompleteTask);
        addTask(newIncompleteTask);
        setIncomplete({
            incompleteText:'',
            incompleteRating : '',
        }
        )}
    }

    return (
        <div className = "form-wrapper">
            <form onSubmit = {onSubmitIncomplete}>
                <div className = "input-group incomplete">
                    <input type = "text" name = "incompleteText"
                    value = {incompleteText} placeholder = "Add task..." 
                    autoComplete = "off" onChange = {onChangeIncomplete}/>
                    <input type = "number" name = "incompleteRating"
                     value = {incompleteRating} placeholder = "Priority Rating (1-3)" 
                    autoComplete = "off" onChange = {onChangeIncomplete}/>
                    <input type = "submit" value = "Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTask
