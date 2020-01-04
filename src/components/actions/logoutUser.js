import firebaseConfig from '../firebaseConfig';


export const logoutUser = () => {

    return async function(dispatch){

        await firebaseConfig.logout();
        dispatch({type: "LOGIN_USER", payload: {} });
        dispatch({type: "CREATE_USER", payload: {} });
    }

}
