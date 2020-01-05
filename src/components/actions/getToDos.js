import firebaseConfig from '../firebaseConfig';


export const getToDos = () => {
    return async function(dispatch){
        const toDoItems = await firebaseConfig.getToDos();
        console.log(toDoItems);
        dispatch({type:'GET_TO_DOS', payload: toDoItems})
    }
}
