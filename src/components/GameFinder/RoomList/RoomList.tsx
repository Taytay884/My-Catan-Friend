import React from "react";
import Room from "./Room/Room";
import {RoomService} from "../../../services/Room.service";
import {IRoom} from "../../../types/Room";
import styled from "styled-components";
import {connect} from "react-redux";
import {setRoom} from "../../../redux/actions";
import {SetRoomAction} from "../../../types/actions";

interface Props {
    setRoom: (room: IRoom) => SetRoomAction;
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
            loading: false,
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
            return room ? <Room setRoom={this.props.setRoom} room={room} key={room.id}/> : <div>Error in this room.</div>
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

export default connect(null, {setRoom})(RoomList);
