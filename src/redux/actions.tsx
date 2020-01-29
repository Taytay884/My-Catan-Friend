import {USER_LOGIN, UserLoginAction} from "./actionTypes";

export const userLogin = (userName: string): UserLoginAction => ({
    type: USER_LOGIN,
    payload: {userName}
});
