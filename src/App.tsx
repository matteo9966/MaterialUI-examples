import * as React from "react";
import "./App.css";
import { FancySwitch } from "./components/FancySwitch/FancySwitch";
import { NestedSlider } from "./components/nestedSlider/NestedSlider";
import PlainCssSlider from "./components/Slider/Slider";
import { SxSlider } from "./components/SxSlider/Slider";

function App() {


  return (
    <>
    
     <PlainCssSlider></PlainCssSlider>
      <SxSlider></SxSlider>
      <NestedSlider></NestedSlider>
      <FancySwitch></FancySwitch>
 
    </>
  );
}

export default App;
