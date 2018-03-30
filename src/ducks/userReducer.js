const initialState = {
    userName: '',
    password: '',
}

const GET_USERNAME = "GET_USERNAME"
const GET_PASSWORD = "GET_PASSWORD"

export function getUsername(username) {
    return {
        type: GET_USERNAME,
        payload: username
    }
}

export function getPassword(password) {
    return {
        type: GET_PASSWORD,
        payload: password
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERNAME:
           return Object.assign({}, state, { userName: action.payload } )
        
        case GET_PASSWORD:
           return Object.assign({}, state, { password: action.payload } )
        
        default:
            return state
    }
}