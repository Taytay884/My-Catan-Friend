import {USER_LOGIN} from "../actionTypes";

interface IUserState {
    loggedInUser: string;
}

const initialState: IUserState = {
    loggedInUser: '',
};

interface IAction {
    type: string;
    payload: any;
}

export default function (state = initialState, action: IAction): IUserState {
    switch (action.type) {
        case USER_LOGIN: {
            const {userName} = action.payload;
            localStorage.setItem('loggedInUser', userName);
            return {
                ...state,
                loggedInUser: userName,
            };
        }
        default:
            return state;
    }
}
