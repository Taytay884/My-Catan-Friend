import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './App.scss';
import Login from "./components/login";
import styled from "styled-components";

const StyledAppContainer = styled.div`
    height: 100%;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
`;

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/login'}>
                    <StyledAppContainer>
                        <Login/>
                    </StyledAppContainer>
                </Route>
                <Redirect from="/" to="login" />
            </Switch>
        </Router>
    );
};

export default App;
