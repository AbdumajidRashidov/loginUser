import React from 'react';
import styled from "styled-components";


const BlackButton  = styled.button`
    background: #262628;
    width:100%;
    max-width:252px;
    border:none;
    outline: none;
    padding: 10px;
    cursor: pointer;
    border: 0.6px solid #CFD0D7;
    box-sizing: border-box;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 1.3px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.016em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin:30px auto;
`;

function Button(props) {
    return(
        <BlackButton type={props.asButton} className='custom-btn'>{props.text}</BlackButton>
    )
}
export default Button