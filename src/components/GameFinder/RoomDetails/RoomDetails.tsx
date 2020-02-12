import React from "react";
import styled from "styled-components";
import {IRoomDetails} from "../../../types/Room";

interface Props {
    room: IRoomDetails;
}

interface RoomState {

}

const StyledRoomDetails = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

class RoomDetails extends React.Component<Props, RoomState> {

    render() {
        return (
            <div>
                <h1>Room Details</h1>
                <StyledRoomDetails>
                    <span>{this.props.room.name}</span>
                    <span>{this.props.room.number}</span>
                    <span>{this.props.room.participants} / {this.props.room.maxParticipants}</span>
                </StyledRoomDetails>
            </div>
        )
    }
}

export default RoomDetails;
