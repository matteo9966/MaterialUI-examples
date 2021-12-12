import React from 'react'
import Slider from '@mui/material/Slider';
export const NestedSlider = () => {
    return (
        <div>
            <Slider
             defaultValue={30}
             sx={{
               width: 300,
               color: 'success.main',
               '& .MuiSlider-thumb': {
                 borderRadius: '1px',
               },
             }}
            >

            </Slider>
        </div>
    )
}
