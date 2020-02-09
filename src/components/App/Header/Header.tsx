import React, {ReactElement} from 'react';
import '../../../style/App.scss';
import styled from "styled-components";
import {COLORS, HEADER_HEIGHT, MENU_BUTTON_WIDTH} from "../../../style/const";

const StyledHeader = styled.div`
    background-color: ${COLORS.SUNSHINE};
    height: ${HEADER_HEIGHT};
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:before {
        width: ${MENU_BUTTON_WIDTH};
        content: '';
        display: block;
    }
`;

const StyledMenuButton = styled.button`
    display: block;
    width: ${MENU_BUTTON_WIDTH};
`;

const Header: React.FC = (): ReactElement => {
    return (
        <StyledHeader>
            <h2>My Catan Friend</h2>
            <StyledMenuButton>Menu</StyledMenuButton>
        </StyledHeader>
    );
};

export default Header;
