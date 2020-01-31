import {USER_LOGIN, USER_LOGOUT, UserActions} from "../../types/actions";

export interface IUserState {
    loggedInUser: string;
}

const initialState: IUserState = {
    loggedInUser: '',
};

export default function (state = initialState, action: UserActions): IUserState {
    switch (action.type) {
        case USER_LOGIN: {
            const userName = action.userName;
            localStorage.setItem('loggedInUser', userName);
            return {
                ...state,
                loggedInUser: userName,
            };
        }
        case USER_LOGOUT: {
            localStorage.removeItem('loggedInUser');
            return {
                ...state,
                loggedInUser: '',
            };
        }
        default:
            return state;
    }
}
