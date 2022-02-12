import axios from "axios";
import React, {useState}from 'react'
import Button from "./customButton";
import Input from "./customInput";
import SelectInput from "./selectInput";
import eyeIcon from '../Assets/images/eye.png';
const BASE_URL = "http://92.63.206.40:1122/api";


function SignupComponent(){
    let textBtn = "Signup";
    let asButton = "submit";
    let isEyeClick = false;

    let [fullname, setFullname] = useState()
    let [password, setPassword] = useState()
    let [firstName, setFirstName] = useState()
    let [Surname, setSurname] = useState()
    let [email, setEmail] = useState()
    let [phone, setPhone] = useState()
    let [faculty, setFaculty] = useState()

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
        setPassword({ password: event.target.value});
        setFirstName({firstName: event.target.value});
        setSurname({ Surname: event.target.value});
        setEmail({ email: event.target.value});
        setPhone({ phone: event.target.value});
        setFaculty({ faculty: event.target.value});
    }

    let handleSubmit = event => {
        event.preventDefault();
        
        let user = {
            fullname:fullname,
            password:password,
            firstName:firstName,
            surname:Surname,
            email:email,
            phone:phone,
            faculty:faculty
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
            url: `${BASE_URL}/signin`,
            data: user,
            
          });
      }

    return(
        <div style={{width:"60%"}}>
        <h2 className="logo">Logo</h2>
        <form action="" className="form" onSubmit={handleSubmit}>
            <Input type={"text"} onChange={handleChange} labelName={"Login *"} placeholder={"Eg. your login here"}></Input>
            <Input type={"text"} onChange={handleChange} labelName={"Name *"} placeholder={"Eg. your name here"}></Input>
            <Input type={"text"} onChange={handleChange} labelName={"Surname *"} placeholder={"Eg. your Surname here"}></Input>
            <Input type={"email"} onChange={handleChange} labelName={"e-mail *"} placeholder={"Eg. your e-mail here"}></Input>
            <Input type={"tel"} onChange={handleChange} labelName={"Phone number *"} placeholder={"Eg. your Phone number here"}></Input>
            <SelectInput value="value1" optionsNumber={5} onChange={handleChange} labelName={"Faculty *"} placeholder={"Eg. your Phone number here"}></SelectInput>
            <Input type={"password"} onChange={handleChange} labelName={"Password *"} placeholder={"Eg. your pasword here"}></Input>
            <img onClick={eyeClickHandler} src={eyeIcon} className="eyeIconSignUp" alt="eyeIcon"></img>

            <Button as={asButton} text={textBtn}></Button>
        </form>
    </div>
    )
}
export default SignupComponent