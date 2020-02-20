import React from "react";
import "./App.css";
import PhotoData from "./Components/PhotoData";
import { Jumbotron, Button } from 'reactstrap';
import styled from "styled-components";

const JTronButton = styled.button`
  box-shadow: 5px 10px black;
  background-color: red;
  color: azure;
  border-radius: 10px
`
const TextColor = styled.p `
    color: blue;
`

function App() {
  return (
    <div className="App">
      <Jumbotron>
      <h1 className="display-3">Hello, Earthlings!</h1>
        <TextColor className="lead">This is a simple NASA API call.  This page will display the current NASA photo of the day right here without visiting the NASA site as well!</TextColor>
        <hr className="my-2" />
        <p>This page only displays the current photo of the day.  If you would like to see previous photo's of the day, click the button below.</p>
        <p className="lead">
          <a href = "https://www.nasa.gov/multimedia/imagegallery/iotd.html"><JTronButton color="primary">Visit NASA</JTronButton></a>
        </p>
      </Jumbotron>
      <PhotoData/>
    </div>
  );
}

export default App;
