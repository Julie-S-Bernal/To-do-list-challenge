import firebaseConfig from '../firebaseConfig';


export const updateToDo = (toDoId, toDoData) => {
    return async function(dispatch){
        const toDoItems = await firebaseConfig.updateToDo(toDoId, toDoData);
        if(toDoItems) {
        dispatch({type:'GET_TO_DO', payload: toDoItem})
        } else {
            // TODO add error handler here.
            console.log('does not exist')
        }
    }
}
