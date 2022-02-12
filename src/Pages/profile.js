import React from "react";
import Navbar from "../Layouts/Navbar";
import CardBg from "../Components/CardBg";
import ava from '../Assets/images/ava.png';
import cameraIcon from '../Assets/images/camera.png';


function Profile(){
    return(
        <div className="container">
            <Navbar></Navbar>
            <div className="cards">
                <CardBg>
                    <div className="profile-data">
                        <div className="profile-img">
                            <img className="ava" src={ava} alt="ava"/>
                            <label htmlFor="imgCamera">
                                <img className="camera" src={cameraIcon} alt="camera icon"></img>
                            </label>
                            <input name="img" id="imgCamera" className="inputCamera" type={"file"}></input>
                        </div>
                        <div className="profile-name">
                            <h4 className="fullname">Name Surname</h4>
                            <p className="id">272610</p>
                            <p className="faculty">
                                Bachelor of science program in ENGINEERING AND MANAGEMENT
                            </p>
                        </div>

                    </div>
                </CardBg>
                <CardBg>
                    <div className="profile-data">
                       
                    </div>
                </CardBg>
                <CardBg>
                    <div className="profile-data">
                        
                    </div>
                </CardBg>
                <CardBg>
                    <div className="profile-data">
                        
                    </div>
                </CardBg>
            </div>
        </div>
    )
}

export default Profile