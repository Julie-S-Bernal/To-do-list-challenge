const getToDo=(
    state={
      toDo:{},
    },
    action)=>{
        if(action.type === 'GET_TO_DO'){
            state={...state, toDo:action.payload}
        }
        return state
    };
export default getToDo;
