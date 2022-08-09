import { ADD_USER_ACTION } from "../Actions/ActionTypes";

const initialState = [];

const addUserInList = (currentValue,newValue) => {
    return [...currentValue , newValue]
}



export const addUserReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_USER_ACTION :
            return addUserInList(state , action.data)

        default :
            return state
    }
};