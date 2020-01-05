import firebaseConfig from '../firebaseConfig';
import { firestore } from 'firebase';


export const createToDo = (toDo) => {
    return async function(dispatch){
        const storeToDo = await firebaseConfig.createToDo(toDo);
        dispatch({type: "CREATE_TO_DO", payload: storeToDo});
    }

}
