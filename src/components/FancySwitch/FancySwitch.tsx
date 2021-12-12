import React from 'react'
import Switch from '@mui/material/Switch';
import { Box } from '@mui/system';


export const FancySwitch = () => {
  const dayFont:React.CSSProperties ={color:'blue',backgroundColor:'lightgray',}
  const nightFont:React.CSSProperties ={color:'white',backgroundColor:'black',}

  const [style,setStyle]=React.useState<React.CSSProperties>(dayFont)

  const onChangeStyleToDay=(event: React.ChangeEvent<HTMLInputElement>, checked: boolean)=>{
      if(checked) setStyle(dayFont)
  }
  const onChangeStyleToNight=(event: React.ChangeEvent<HTMLInputElement>, checked: boolean)=>{
    if(checked) setStyle(nightFont)
  }
    return (
        <div>
        <Box component={"div"} sx={{display:'flex','&:before':{'content':'"off"'},'&:after':{'content':'"on"'}}}>
        <Switch onChange={onChangeStyleToDay} sx={{'& .MuiSwitch-thumb':{backgroundColor:'error.main'}}} ></Switch>
      </Box>
      <Box component={"div"} sx={{display:'flex','&:before':{'content':'"off"'},'&:after':{'content':'"on"'}}}>
        <Switch onChange={onChangeStyleToNight} sx={{'& .MuiSwitch-thumb':{backgroundColor:'error.main'}}} ></Switch>
      </Box>
       
        <Box sx={{width:200,height:200}} style={style}>
            HELLLOOOW 
        </Box>

        </div>
    )
}
