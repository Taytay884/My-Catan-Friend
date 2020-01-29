export const USER_LOGIN = "USER_LOGIN";

export interface UserLoginAction {
    type: typeof USER_LOGIN;
    userName: string;
}

export type UserActions = UserLoginAction // | UserLogoutAction | ...

export type AppActions = UserActions; // | GameActions | ...
