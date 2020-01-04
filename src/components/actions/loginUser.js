import firebaseConfig from '../firebaseConfig';


export const loginUser = (email, password) => {

    return async function(dispatch){
        const user = await firebaseConfig.login(email, password).catch(err => console.log(err));

        if(user){
            dispatch({type: "LOGIN_USER", payload: user});
            return user;
        }
    }

}
