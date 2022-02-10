import React from "react";
import 'normalize.css';
import './Styles/styles.css'
import RightSide from "./Components/RightSide";
import LeftSide from "./Components/LeftSide";


function App() {
  let isTrue = false;
  let textLeftSide = "sign In";
  let textRightSide ="Registration form"
  return (
    <div className="main-container">
      <LeftSide text={ isTrue ? textLeftSide : textRightSide}></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}

export default App;
