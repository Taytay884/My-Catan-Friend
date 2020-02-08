import {IRoom} from "../types/Room";
import Rooms from '../utils/mock/rooms.json';

export class RoomService {
    static getRooms = () => {
        return new Promise<IRoom[]>((resolve): void => {
            setTimeout(() => {
                resolve(Rooms);
            }, 1500)
        });
    }
}
