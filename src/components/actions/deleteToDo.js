import firebaseConfig from '../firebaseConfig';


export const deleteToDo = (toDoId) => {
    return async function(dispatch){
        const toDoItem = await firebaseConfig.deleteToDo(toDoId);
        dispatch({type:'DELETE_TO_DO', payload: toDoItem})
    }
}
