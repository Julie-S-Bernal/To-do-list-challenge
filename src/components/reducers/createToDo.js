const createToDo = (
    state={
      ToDo: {}
    },
    action) => {
    if(action.type === 'CREATE_TO_DO'){
      state={...state, ToDo: action.payload}
    }
    return state;
  }

  export default createToDo;
