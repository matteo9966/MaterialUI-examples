import * as React from "react";
import "./App.css";
import { useTheme } from "@mui/material/styles";

import { GridContainer } from "./components/UI/Grid";
import { GridItem } from "./components/UI/GridItem";
import { Grid } from "@mui/material";
function App() {
  const theme = useTheme();

  return (
    <>
      <GridContainer>
        <GridItem text="nocturnal Dark" background={theme.palette.nocturnalDark}></GridItem>
        <GridItem text="Peaceful"  backgroundColor={theme.relaxing.peace}></GridItem>
        <GridItem text="Love" backgroundColor={theme.relaxing.love}></GridItem>
        <GridItem text="Sleep" backgroundColor={theme.relaxing.sleep} ></GridItem>
        <GridItem text="Danger" backgroundColor={theme.status.danger}></GridItem>
     
      </GridContainer>
 
    </>
  );
}

export default App;
