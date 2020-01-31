import React, {ReactElement} from "react";
import {UserService} from "../../services/User.service";
import {Redirect} from "react-router";
import {UserLoginAction} from "../../types/actions";
import {connect} from "react-redux";
import {userLogin} from "../../redux/actions";
import GameFinder from "../GameFinder/GameFinder";

type userLoginFunc = (userName: string) => UserLoginAction;

interface PrivateRouteProps {
    path: string;
    userLogin: userLoginFunc;
}

interface DispatchProps {
    userLogin: (userName: string) => UserLoginAction;
}

type CombinedProps = PrivateRouteProps & DispatchProps;

class ResolveAuthorize extends React.Component<CombinedProps, { renderData: ReactElement | null }> {
    constructor(props: CombinedProps) {
        super(props);
        this.state = {
            renderData: null
        };
    }

    componentDidMount(): void {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn() {
        UserService.getLoggedInUser()
            .then((userName: string) => {
                // Inserts userName to store.
                this.props.userLogin(userName);
                this.setState({renderData: <GameFinder/>})
            })
            .catch(() => {
                this.setState({renderData: <Redirect to={'/login'}/>})
            });
    }

    render() {
        return (
            this.state.renderData ? this.state.renderData : <h1>Loading...</h1>
        );
    }
}

export default connect(null, {userLogin})(ResolveAuthorize);
