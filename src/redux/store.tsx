import { createStore } from "redux";
import rootReducer from "./reducers";
import {IUserState} from "./reducers/user";
import {IRoomState} from "./reducers/room";

export default createStore(rootReducer);

export type AppState = {user: IUserState, room: IRoomState}
