import {USER_LOGIN, UserActions} from "../../types/actions";

interface IUserState {
    loggedInUser: string;
}

const initialState: IUserState = {
    loggedInUser: '',
};

export default function (state = initialState, action: UserActions): IUserState {
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
