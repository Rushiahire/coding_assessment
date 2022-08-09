import { ADD_USER_ACTION } from "../Actions/ActionTypes";

export const AddNewUserAction = (data) => {
    return {
    type: ADD_USER_ACTION,
    data: data
    };
};