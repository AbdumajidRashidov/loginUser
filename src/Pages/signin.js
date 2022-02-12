import React from "react";
import LeftSide from "../Components/LeftSide";
import SigninComponent from "../Components/signinComponent";
import StyledRightSide from "../Components/RightSide";



function Signin(){
    let isTrue = true;
    let textLeftSide = "sign In";
    let textRightSide ="Registration form"
    return(
        <div className="main-container">
          <LeftSide text={ isTrue ? textLeftSide : textRightSide}></LeftSide>
          <StyledRightSide>
            <SigninComponent></SigninComponent>
          </StyledRightSide>
        </div>
    )
}
export default Signin