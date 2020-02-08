import React from "react";
import {IRoom} from "../../../../types/Room";

interface Props {
    room: IRoom;
}

interface RoomState {

}

class Room extends React.Component<Props, RoomState> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (<div>
            <div>
                <span>{this.props.room.name}</span>
                <span>{this.props.room.number}</span>
                <span>{this.props.room.participants}</span>
                <span>{this.props.room.maxParticipants}</span>
            </div>
        </div>)
    }
}

export default Room;
