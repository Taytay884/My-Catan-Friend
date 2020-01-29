// A Wrapper of two components that let you find a game. (List and Map)

import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";

class GameFinder extends React.Component<RouteComponentProps, {isSubmitting: boolean}> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            isSubmitting: false
        }
    }
    handleLogOut() {
        localStorage.removeItem('loggedInUser');
        this.setState({isSubmitting: true});
        setTimeout(() => {
            this.props.history.push('/login');
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>Game Finder Component.</h1>
                <button onClick={this.handleLogOut.bind(this)} disabled={this.state.isSubmitting}>Logout</button>
            </div>
        )
    }

}

export default withRouter(GameFinder);
