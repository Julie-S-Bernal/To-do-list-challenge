const getToDos=(
    state={
      toDos:[],
    },
    action)=>{
        if(action.type === 'GET_TO_DOS'){
            state={...state, toDos:action.payload}
        }
        return state
    };
export default getToDos;
