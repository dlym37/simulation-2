const initialState = {
    userName: "",
    password: "",
    three: "",
    four: "",
}

const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const CASE_THREE = "CASE_THREE";
const CASE_FOUR = "CASE_FOUR";


function reducer(state=initialState, action){//SIM-1 43D
    console.log("reducer:", state, action)
    switch (action.type){
        case UPDATE_USERNAME:
        return Object.assign({}, state, {userName: action.payload})//SIM-2 43E
        
        case UPDATE_PASSWORD:
        return Object.assign({}, state, {password: action.payload})
        
        case CASE_THREE:
        return Object.assign({}, state, {three: action.payload})
        
        case CASE_FOUR:
        return Object.assign({}, state, {four: action.payload})
        
    }
}

export function updateUserName(userName){//SIM-2 43F
    return {
        type: UPDATE_USERNAME,
        payload: userName
    }
}
export function updatePassword(password){//SIM-2 43F
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}
export function caseThree(three){//SIM-2 43F
    return {
        type: CASE_THREE,
        payload: three
    }
}
export function caseFour(four){//SIM-2 43F
    return {
        type: CASE_FOUR,
        payload: four
    }
}
export default reducer;