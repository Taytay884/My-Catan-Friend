import React from 'react';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import '../../style/App.scss';
import Login from "../Login/Login";
import GameFinder from "../GameFinder/GameFinder";

const PrivateRoute = ({...options}) => {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    return (
        isLoggedIn
            ? <GameFinder {...options} />
            : <Redirect to='/login'/>
    )
};

const LoginRoute = ({path}: {path: string}) => {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    return (isLoggedIn ? <Redirect to={'/'}/> : <Login/>);
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path={'/game-finder'} component={GameFinder}/>
                <LoginRoute path={'/login'}/>
                <Redirect from="/" to="game-finder"/>
            </Switch>
        </Router>
    );
};

export default AppRouter;
