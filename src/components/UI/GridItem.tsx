import React from 'react'
import Grid from '@mui/material/Grid';
import  Paper  from '@mui/material/Paper';


export const GridItem:React.FC<{text:string,background?:React.CSSProperties['color'],backgroundColor?:React.CSSProperties['color']} > = (props) => {
    
    return (
        <Grid item  xs={12} md={6} lg={4}>
            <Paper  sx={{ minWidth:0, padding:'5rem',backgroundImage:props.background,backgroundColor:props.backgroundColor}}>
               
               {props.text}

            </Paper>
        </Grid>
    )
}
