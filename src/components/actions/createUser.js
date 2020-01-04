import firebaseConfig from '../firebaseConfig';


export const createUser = (email, password) => {

    return async function(dispatch){
        const user = await firebaseConfig.register(email, password);
        dispatch({type: "CREATE_USER", payload: user});

    }

}
