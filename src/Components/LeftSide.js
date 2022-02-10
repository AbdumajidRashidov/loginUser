import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h3`
    font-size: 48px;
    line-height: 30px;
    letter-spacing: 0.019em;
    color: #FFFFFF;
    margin-top:20%;
`

function LeftSide(props){
    return(
        <div className="right-side">
            <div>
                <StyledLogo>LOGO</StyledLogo>
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}
export default LeftSide