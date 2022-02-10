import React from 'react';
import styled from "styled-components";
import Signin from '../Pages/signin';
import Signup from '../Pages/signup';

const StyledRightSide  = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    width: 50%;
    margin:2% 2% 2% 0;
`;

function RightSide(props) {
    let isTrue = true;
    return(
        <StyledRightSide>
            {isTrue ? <Signin></Signin>:<Signup></Signup>}
        </StyledRightSide>
    )
}
export default RightSide