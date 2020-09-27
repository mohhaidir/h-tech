const initialState = {
    isLoggedIn: false,
    token: null,
    name: null
}

function userReducer(state = initialState, action){
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                name: action.payload.name,
            };
        case 'LOOUT':
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                name: null
            }
        case "SET_ISLOGGEDIN":
            return { ...state, isLoggedIn: action.payload };
        // case "SET_TOKEN":
        //     return { ...state, token: action.payload };
        // case "GET_STATE":
        //     return state;
        default:
            return state;
    }
}

export default userReducer;
