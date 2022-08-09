import { combineReducers } from 'redux';
import { addUserReducer } from "./AddUserReducer";

const RootReducer = combineReducers({
    addUserReducer
});


export default RootReducer;