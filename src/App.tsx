import * as React from "react";
import "./App.css";
import PlainCssSlider from "./components/Slider/Slider";
import { SxSlider } from "./components/SxSlider/Slider";
import { StyledEngineProvider } from '@mui/material/styles';
function App() {


  return (
    <>
    <StyledEngineProvider injectFirst>
     <PlainCssSlider></PlainCssSlider>
    </StyledEngineProvider>
     <SxSlider></SxSlider>
 
    </>
  );
}

export default App;
