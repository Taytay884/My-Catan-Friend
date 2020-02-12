import {RoomActions, SET_ROOM} from "../../types/actions";
import {IRoom} from "../../types/Room";

export interface IRoomState {
    currentRoom: IRoom | null;
}

const initialState: IRoomState = {
    currentRoom: null,
};

export default function (state = initialState, action: RoomActions): IRoomState {
    switch (action.type) {
        case SET_ROOM: {
            const room = action.room;
            return {
                ...state,
                currentRoom: room,
            };
        }
        default:
            return state;
    }
}
