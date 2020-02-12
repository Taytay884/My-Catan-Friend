import React from "react";
import styled from "styled-components";
import {COLORS} from "../../../../style/const";
import {IRoom, IRoomDetails} from "../../../../types/Room";
import {SetRoomAction} from "../../../../types/actions";

interface Props {
    room: IRoomDetails;
    setRoom: (room: IRoom) => SetRoomAction;
}

interface RoomState {

}

const StyledRoom = styled.div`
    width: 100%;
    background-color: ${COLORS.SUNSHINE};
    box-shadow: 0 0 1px 1px ${COLORS.WHITE};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledRoomContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 5;
    height: inherit;
`;
const StyledRoomContentRight = styled.div`
    display: flex;
    justify-content: center;
    flex: 3;
    height: inherit;
    align-items: center;
`;

const StyledRoomJoinButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    height: inherit;
`;

class Room extends React.Component<Props, RoomState> {

    render() {
        return (
            <StyledRoom>
                <StyledRoomContentLeft>
                    <span>{this.props.room.name}</span>
                    <span>{this.props.room.number}</span>
                </StyledRoomContentLeft>
                <StyledRoomContentRight>
                    <span>{this.props.room.participants} / {this.props.room.maxParticipants}</span>
                </StyledRoomContentRight>
                <StyledRoomJoinButton>
                    <button onClick={() => this.props.setRoom(this.props.room)} disabled={this.props.room.participants === this.props.room.maxParticipants}>Join</button>
                </StyledRoomJoinButton>
            </StyledRoom>
        )
    }
}

export default Room;
