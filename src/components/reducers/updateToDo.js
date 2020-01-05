const updateToDo=(
    state={
      toDo:{},
    },
    action)=>{
        if(action.type === 'UPDATE_TO_DO'){
            state={...state, toDo:action.payload}
        }
        return state
    };
export default updateToDo;
