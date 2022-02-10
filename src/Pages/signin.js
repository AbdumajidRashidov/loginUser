import React from "react";
import Button from "../Components/customButton";
import Input from "../Components/customInput";
import eyeIcon from '../Assets/images/eye.png'

function Signin(){
    let textBtn = "sign in";
    let asButton = "submit";
    let typePassword = "password";
    let isEyeClick = false
    function eyeClickHandler(evt){
        isEyeClick = !isEyeClick
        if(isEyeClick){
            evt.target.previousSibling.lastChild.type = "text"
        }else{
            evt.target.previousSibling.lastChild.type = "password"
        }
    }

    return(
        <div style={{width:"60%"}}>
            <h2 className="logo">Logo</h2>
            <form action="" className="form">
                <Input margin="30px" padding="12px" type={"text"} labelName={"Login *"} placeholder={"Eg. your login here"}></Input>
                <Input margin="30px" padding="12px" type={typePassword} labelName={"Password *"} placeholder={"Eg. your pasword here"}></Input>
                <img onClick={eyeClickHandler} src={eyeIcon} className="eyeIcon" alt="eyeIcon"></img>
                <Button as={asButton} text={textBtn}></Button>
            </form>
        </div>
    )
}
export default Signin