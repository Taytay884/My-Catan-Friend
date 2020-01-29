export const USER_LOGIN = "USER_LOGIN";

export interface UserLoginAction {
    payload: { userName: string };
    type: string
}
