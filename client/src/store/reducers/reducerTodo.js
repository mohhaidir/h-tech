const initialState = {
    todos: []
};

function reducerTodo(state = initialState, action){
    switch (action.type) {
        case "GET_TODOS":
          return { ...state, todos: action.payload };
        case "DELETE_TODO":
          return { ...state, todos: action.payload };
        case "ADD_TODO":
          return { ...state, todo: action.payload };
        case "EDIT_TODO":
          return { ...state, todo: action.payload };
        default:
          return state;
    }
}

export default reducerTodo;
