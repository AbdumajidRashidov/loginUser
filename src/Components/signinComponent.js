import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "./customButton";
import Input from "./customInput";
import eyeIcon from '../Assets/images/eye.png';
const BASE_URL = "http://92.63.206.40:1122/api"


function SigninComponent(){
    let textBtn = "sign in";
    let asButton = "submit";
    let typePassword = "password";
    let isEyeClick = false
    let [fullname, setFullname] = useState()
    let [password, setPassword] = useState()

    function eyeClickHandler(evt){
        isEyeClick = !isEyeClick
        if(isEyeClick){
            evt.target.previousSibling.lastChild.type = "text"
        }else{
            evt.target.previousSibling.lastChild.type = "password"
        }
    }

    let handleChange = event => {
        setFullname({ fullname: event.target.value });
        setPassword({ password: event.target.value})
    }

    let handleSubmit = event => {
        event.preventDefault();
        
        let user = {
            fullname:fullname,
            password:password
        }
    

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic ' + BASE_URL.encode(fullname + ":" +  password));
        headers.append('Origin','http://localhost:3000');

        axios({
            method: 'post',
            mode: 'cors',
            credentials: 'include',
            headers:headers,
            url: `${BASE_URL}/login`,
            data: user,
            
          });
      }

    return(
        <div style={{width:"60%"}}>
            <h2 className="logo">Logo</h2>
            <form className="form" onSubmit={handleSubmit}>
                <Input margin="30px" padding="12px" type={"text"} onChange={handleChange} labelName={"Login *"} placeholder={"Eg. your login here"}></Input>
                <Input margin="30px" padding="12px" type={typePassword} onChange={handleChange} labelName={"Password *"} placeholder={"Eg. your pasword here"}></Input>
                <img onClick={eyeClickHandler} src={eyeIcon} className="eyeIcon" alt="eyeIcon"></img>
                <Link to="/signup"className="signUpLink">Sign up</Link>
                <Button as={asButton} text={textBtn}></Button>
            </form>
        </div>
    )
}
export default SigninComponent