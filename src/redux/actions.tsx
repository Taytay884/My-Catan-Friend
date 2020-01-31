import {USER_LOGIN, USER_LOGOUT, UserLoginAction, UserLogoutAction} from "../types/actions";

export const userLogin = (userName: string): UserLoginAction => ({
    type: USER_LOGIN,
    userName
});

export const userLogout = (): UserLogoutAction => ({
    type: USER_LOGOUT,
});
