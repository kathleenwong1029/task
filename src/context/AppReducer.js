
export default (state,action) => {
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state,
                incompleteTasks:[action.payload,...state.incompleteTasks],
            };
        case 'ADD_COMPLETE':
                return{
                ...state,
                completeTasks:[action.payload,...state.completeTasks],
                };
        case 'DELETE_TASK':
                return{
                ...state,
                incompleteTasks:state.incompleteTasks.filter (
                    (incompleteTask) => incompleteTask.id !== action.payload
                )
                };
        default:
            return state;
    }
}