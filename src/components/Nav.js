import React from 'react';
import styled from 'styled-components';

const NavBox = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: #eee;
`;

export default function Nav() {
    return (
        <NavBox>
            <div>logo</div>
            <div>
                <span>products </span>
                <span>carts </span>
                <span>login </span>
            </div>
        </NavBox>
    );
}
