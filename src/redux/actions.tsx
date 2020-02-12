import {SET_ROOM, SetRoomAction, USER_LOGIN, USER_LOGOUT, UserLoginAction, UserLogoutAction} from "../types/actions";
import {IRoom} from "../types/Room";

export const userLogin = (userName: string): UserLoginAction => ({
    type: USER_LOGIN,
    userName
});

export const userLogout = (): UserLogoutAction => ({
    type: USER_LOGOUT,
});

export const setRoom = (room: IRoom): SetRoomAction => ({
    type: SET_ROOM,
    room
});

