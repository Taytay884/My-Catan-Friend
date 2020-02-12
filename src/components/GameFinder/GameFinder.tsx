// A Wrapper of two components that let you find a game. (List and Map)

import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";
import {userLogout} from "../../redux/actions";
import {AppState} from "../../redux/store";
import RoomList from "./RoomList/RoomList";
import styled from 'styled-components';
import RoomDetails from "./RoomDetails/RoomDetails";
import {IRoom} from "../../types/Room";
import {UserLogoutAction} from "../../types/actions";

interface GameFinderState {
    isSubmitting: boolean
}

interface DispatcherToProps {
    userLogout: () => UserLogoutAction;
}

interface PropsFromStore {
    loggedInUser: string;
    currentRoom: IRoom | null;
}

const StyledGameFinderWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

type Props = RouteComponentProps & PropsFromStore & DispatcherToProps;

class GameFinder extends React.Component<Props, GameFinderState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isSubmitting: false
        }
    }

    handleLogOut(): void {
        localStorage.removeItem('loggedInUser');
        this.setState({isSubmitting: true});
        setTimeout((): void => {
            this.setState({isSubmitting: false});
            this.props.userLogout();
            this.props.history.push('/login');
        }, 500)
    }

    render() {
        return (
            <StyledGameFinderWrapper>
                <span>{this.props.loggedInUser} </span>
                <button style={{marginBottom: '5px'}} onClick={this.handleLogOut.bind(this)}
                        disabled={this.state.isSubmitting}>Logout
                </button>
                {this.props.currentRoom ? <RoomDetails room={this.props.currentRoom}/> : <RoomList/>}

            </StyledGameFinderWrapper>
        )
    }
}

function mapStateToProps(state: AppState): PropsFromStore {
    const {loggedInUser} = state.user;
    const {currentRoom} = state.room;
    return {loggedInUser, currentRoom};
}

export default connect(mapStateToProps, {userLogout})(withRouter(GameFinder));
