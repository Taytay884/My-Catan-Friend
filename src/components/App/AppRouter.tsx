import React from 'react';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import '../../style/App.scss';
import Login from "../Login/Login";
import ResolveAuthorize from "../Authorization/ResolveAuthorize";

const LoginRoute = ({path}: { path: string }) => {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    return (isLoggedIn ? <Redirect to={'/'}/> : <Login/>);
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <ResolveAuthorize path={'/game-finder'}/>
                <LoginRoute path={'/login'}/>
                <Redirect from="/" to="game-finder"/>
            </Switch>
        </Router>
    );
};

export default AppRouter;
