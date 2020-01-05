const deleteToDo=(
    state={
      toDo:{},
    },
    action)=>{
        if(action.type === 'DELETE_TO_DO'){
            state={...state, toDo:action.payload}
        }
        return state
    };
export default deleteToDo;
