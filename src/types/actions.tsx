export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export interface UserLoginAction {
    type: typeof USER_LOGIN;
    userName: string;
}

export interface UserLogoutAction {
    type: typeof USER_LOGOUT;
}

export type UserActions = UserLoginAction | UserLogoutAction;

export type AppActions = UserActions; // | GameActions | ...
