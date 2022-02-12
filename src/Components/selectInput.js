import React from 'react';
import styled from "styled-components";


const StyledSelectInput  = styled.select`
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

const StyledOption = styled.option`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    color: #5F6377;
    margin-bottom:6px;
`


function SelectInput(props) {
    return(
        <div className="input-wrapper">
            <StyledLabel>{props.labelName}</StyledLabel>
            <StyledSelectInput margin={props.margin} padding={props.padding} className='custom-input' placeholder={props.placeholder}>
                <StyledOption disabled selected>Faculty</StyledOption>
                <StyledOption value={props.value}>Faculty1</StyledOption>
                <StyledOption value={props.value}>Faculty1</StyledOption>
                <StyledOption value={props.value}>Faculty1</StyledOption>
            </StyledSelectInput>
        </div>
    )
}
export default SelectInput
