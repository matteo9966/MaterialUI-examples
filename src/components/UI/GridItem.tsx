import React from 'react'
import Grid from '@mui/material/Grid';
import  Paper  from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export const GridItem:React.FC<{text:string,background?:React.CSSProperties['color'],backgroundColor?:React.CSSProperties['color']} > = (props) => {
    
    return (
        <Grid item  xs={4}>
            <Paper  sx={{padding:'5rem',backgroundImage:props.background,backgroundColor:props.backgroundColor}}>
            <Typography variant="h3">
                
               {props.text}

            </Typography>

            </Paper>
        </Grid>
    )
}
