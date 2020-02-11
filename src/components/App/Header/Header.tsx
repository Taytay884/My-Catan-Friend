import React, {ReactElement} from 'react';
import '../../../style/App.scss';
import styled from "styled-components";
import {COLORS, HEADER_HEIGHT, MENU_BUTTON_WIDTH} from "../../../style/const";

const StyledHeader = styled.div`
    background-color: ${COLORS.VERMILLION};
    height: ${HEADER_HEIGHT};
    color: ${COLORS.WHITE};
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

const StyledH2 = styled.h2`
    text-shadow: 0 0 2px black;
`;

const StyledMenuButton = styled.button`
    display: block;
    width: ${MENU_BUTTON_WIDTH};
`;

const Header: React.FC = (): ReactElement => {
    return (
        <StyledHeader>
            <StyledH2>My Catan Friend</StyledH2>
            <StyledMenuButton>Menu</StyledMenuButton>
        </StyledHeader>
    );
};

export default Header;
