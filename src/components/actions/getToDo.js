import firebaseConfig from '../firebaseConfig';


export const getToDo = (toDoId) => {
    return async function(dispatch){
        const toDoItem = await firebaseConfig.getToDo(toDoId);
        dispatch({type:'GET_TO_DO', payload: toDoItem})
    }
}
