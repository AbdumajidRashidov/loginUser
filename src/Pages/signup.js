import React from "react";
import Button from "../Components/customButton";
import Input from "../Components/customInput";
import SelectInput from "../Components/selectInput";
function Signup(){
    let textBtn = "Signup";
    let asButton = "submit"
    return(
        <div style={{width:"60%"}}>
        <h2 className="logo">Logo</h2>
        <form action="" className="form">
            <Input type={"text"} labelName={"Login *"} placeholder={"Eg. your login here"}></Input>
            <Input type={"text"} labelName={"Name *"} placeholder={"Eg. your name here"}></Input>
            <Input type={"text"} labelName={"Surname *"} placeholder={"Eg. your Surname here"}></Input>
            <Input type={"email"} labelName={"e-mail *"} placeholder={"Eg. your e-mail here"}></Input>
            <Input type={"tel"} labelName={"Phone number *"} placeholder={"Eg. your Phone number here"}></Input>
            <SelectInput optionsNumber={5} labelName={"Faculty *"} placeholder={"Eg. your Phone number here"}></SelectInput>
            <Input type={"password"} labelName={"Password *"} placeholder={"Eg. your pasword here"}></Input>
            <Button as={asButton} text={textBtn}></Button>
        </form>
    </div>
    )
}
export default Signup