import React from "react";
import Room from "./Room/Room";
import {RoomService} from "../../../services/Room.service";
import {IRoom} from "../../../types/Room";
import styled from "styled-components";

interface Props {

}

interface RoomListState {
    rooms: IRoom[];
    loading: boolean;
}

const StyledRoomList = styled.div`
    height: 100%;
    width: 100%;
`;

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
            return <Room room={room} key={room.id}/>
        });
    }

    render() {
        return (<StyledRoomList>
            <h2 hidden={!this.state.loading}>Loading rooms...</h2>
            <div hidden={this.state.loading}>
                {this.createRoomComponents()}
            </div>
        </StyledRoomList>)
    }
}

export default RoomList;
