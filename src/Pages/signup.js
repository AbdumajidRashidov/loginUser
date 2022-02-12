import React from "react";
import LeftSide from "../Components/LeftSide";
import SignupComponent from './../Components/signupComponent';
import StyledRightSide from "../Components/RightSide";

function Signup(){
    let isTrue = false;
    let textLeftSide = "sign In";
    let textRightSide ="Registration form"
    return(
        <div className="main-container">
          <LeftSide text={ isTrue ? textLeftSide : textRightSide}></LeftSide>
          <StyledRightSide>
            <SignupComponent></SignupComponent>
          </StyledRightSide>
        </div>
    )
}
export default Signup