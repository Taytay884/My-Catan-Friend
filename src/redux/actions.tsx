import {USER_LOGIN, UserLoginAction} from "../types/actions";

export const userLogin = (userName: string): UserLoginAction => ({
    type: USER_LOGIN,
    userName
});
