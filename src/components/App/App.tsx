import React, {ReactElement} from 'react';
import '../../style/App.scss';
import styled from "styled-components";
import {Provider} from "react-redux";
import store from "../../redux/store";
import AppRouter from "./AppRouter";
import Header from './Header/Header';
import {COLORS, HEADER_HEIGHT} from "../../style/const";

const StyledAppContainer = styled.div`
    background-color: ${COLORS.FRESH};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const StyleAppRouterWrapper = styled.div`
    height: calc(100% - ${HEADER_HEIGHT});
    AppRouter {
        height: 100%;
        width: 100%;
    }
`;

const App: React.FC = (): ReactElement => {
    return (
        <Provider store={store}>
            <StyledAppContainer>
                <Header></Header>
                <StyleAppRouterWrapper>
                    <AppRouter></AppRouter>
                </StyleAppRouterWrapper>
            </StyledAppContainer>
        </Provider>
    );
};

export default App;
