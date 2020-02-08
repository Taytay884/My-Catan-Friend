import React from "react";
import Room from "./Room/Room";
import {RoomService} from "../../../services/Room.service";
import {IRoom} from "../../../types/Room";

interface Props {

}

interface RoomListState {
    rooms: IRoom[];
    loading: boolean;
}

class RoomList extends React.Component<Props, RoomListState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            rooms: [],
            loading: false
        };
    }

    componentDidMount(): void {
        this.setState({...this.state, loading: true});
        RoomService.getRooms()
            .then((rooms: IRoom[]) => {
                this.setState({...this.state, rooms});
            })
            .finally(() => {
                this.setState({...this.state, loading: false});
            })
    }

    createRoomComponents() {
        return this.state.rooms.map((room: IRoom) => {
            return <Room room={room}/>
        });
    }

    render() {
        return (<div>
            <h2 hidden={!this.state.loading}>Loading rooms...</h2>
            <div hidden={this.state.loading}>
                {this.createRoomComponents()}
            </div>
        </div>)
    }
}

export default RoomList;
