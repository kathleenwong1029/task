import React, {createContext, useReducer,useEffect} from 'react'
import AppReducer from "./AppReducer"

const initialState = {
    incompleteTasks : JSON.parse(localStorage.getItem("incompleteTasks"))||[],
    completeTasks : JSON.parse(localStorage.getItem("completeTasks"))||[]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const[state,dispatch] = useReducer(AppReducer,initialState);
    useEffect(() => {
        localStorage.setItem("incompleteTasks",JSON.stringify(state.incompleteTasks));
        localStorage.setItem("completeTasks",JSON.stringify(state.completeTasks));

    })
   
    const addTask = (incompleteTask) => {
        dispatch({
        type: "ADD_TASK",
        payload: incompleteTask,
        });
    }
    const deleteTask = (id) => {
        dispatch({
            type : 'DELETE_TASK',
            payload :id,
        });
    }
    const addComplete = (completeTask) => {
        dispatch({
        type: "ADD_COMPLETE",
        payload: completeTask,
        });
    } 
    return(
        <GlobalContext.Provider value = {{
            incompleteTasks : state.incompleteTasks,
            completeTasks : state.completeTasks,
            addTask,
            deleteTask,
            addComplete,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}