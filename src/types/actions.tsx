/* User Store*/
import {IRoom} from "./Room";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
/* Room Store */
export const SET_ROOM = "SET_ROOM";

/* User Actions */
export interface UserLoginAction {
    type: typeof USER_LOGIN;
    userName: string;
}

export interface UserLogoutAction {
    type: typeof USER_LOGOUT;
}

/* Room Actions */
export interface SetRoomAction {
    type: typeof SET_ROOM;
    room: IRoom;
}

export type UserActions = UserLoginAction | UserLogoutAction;
export type RoomActions = SetRoomAction;

export type AppActions = UserActions | RoomActions;
