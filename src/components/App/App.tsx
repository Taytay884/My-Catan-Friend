import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import '../../style/App.scss';
import Login from "../Login/Login";
import styled from "styled-components";
import GameFinder from "../GameFinder/GameFinder";

const StyledAppContainer = styled.div`
    height: 100%;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
`;

const PrivateRoute = ({...options}) => {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    console.log(isLoggedIn);
    return (
    isLoggedIn
        ? <GameFinder {...options} />
        : <Redirect to='/login'/>
    )
};

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path={'/game-finder'} component={GameFinder}/>
                <Route path={'/login'}>
                    <StyledAppContainer>
                        <Login/>
                    </StyledAppContainer>
                </Route>
                <Redirect from="/" to="game-finder" />
            </Switch>
        </Router>
    );
};

export default App;
