import firebaseConfig from '../firebaseConfig';


export const createToDo = (toDo) => {
    return async function(dispatch){
        const storeToDo = await firebaseConfig.createToDo(toDo);
        dispatch({type: "CREATE_TO_DO", payload: storeToDo});
    }

}
