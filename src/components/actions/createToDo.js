import firebaseConfig from '../firebaseConfig';


export const createToDo = (id, name, description, creationDate) => {

    return async function(dispatch){
        const toDo = await firebaseConfig.createToDo(id, name, description, creationDate);
        dispatch({type: "CREATE_TO_DO", payload: toDo});

    }

}
