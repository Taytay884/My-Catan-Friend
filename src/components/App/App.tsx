import React from 'react';
import '../../style/App.scss';
import styled from "styled-components";
import {Provider} from "react-redux";
import store from "../../redux/store";
import AppRouter from "./AppRouter";

const StyledAppContainer = styled.div`
    height: 100%;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
`;

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <StyledAppContainer>
                <AppRouter></AppRouter>
            </StyledAppContainer>
        </Provider>
    );
};

export default App;
