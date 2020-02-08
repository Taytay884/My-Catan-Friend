// A Wrapper of two components that let you find a game. (List and Map)

import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";
import {userLogout} from "../../redux/actions";
import {AppState} from "../../redux/store";
import {UserLogoutAction} from "../../types/actions";
import RoomList from "./RoomList/RoomList";

interface GameFinderState {
    isSubmitting: boolean
}

interface LogoutProps {
    userLogout: () => UserLogoutAction;
}

interface PropsFromStore {
    loggedInUser: string
}

type Props = RouteComponentProps & PropsFromStore & LogoutProps;

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
            <div>
                <h1>Game Finder Component.</h1>
                <div>
                    <span>{this.props.loggedInUser} </span>
                    <button onClick={this.handleLogOut.bind(this)} disabled={this.state.isSubmitting}>Logout</button>
                    <RoomList/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: AppState): PropsFromStore {
    const {loggedInUser} = state.user;
    return {loggedInUser};
}

export default connect(mapStateToProps, {userLogout})(withRouter(GameFinder));
