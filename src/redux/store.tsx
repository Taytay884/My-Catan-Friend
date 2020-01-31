import { createStore } from "redux";
import rootReducer from "./reducers";
import {IUserState} from "./reducers/user";

export default createStore(rootReducer);

export type AppState = {user: IUserState}
