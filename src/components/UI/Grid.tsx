import  React from 'react';

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';



export  const GridContainer:React.FC= (props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container padding={2} spacing={3}  >
         {props.children}
      </Grid>
    </Box>
  );
}