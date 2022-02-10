import React from 'react';
import styled from "styled-components";


const StyledInput  = styled.input`
    background: #FCFCFD;
    border: 1px solid #CFD0D7;
    box-sizing: border-box;
    border-radius: 2px;
    outline:none;
    margin-bottom:${props => props.margin === "30px" ? "30px" : "10px"};
    padding:${props => props.padding === "12px" ? "12px" : "10px"};
    :focus{
        border:solid 1px #2C473E;
    }
    ::placeholder{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 21px;
        color: rgba(26, 32, 61, 0.3);
    }
`;

const StyledLabel = styled.label`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    color: #5F6377;
    margin-bottom:6px;
`

function Input(props) {
    return(
        <div className="input-wrapper">
            <StyledLabel>{props.labelName}</StyledLabel>
            <StyledInput margin={props.margin} padding={props.padding} type={props.type} className='custom-input' placeholder={props.placeholder}></StyledInput>
        </div>
    )
}
export default Input