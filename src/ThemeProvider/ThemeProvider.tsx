import React from 'react'
import {createTheme,ThemeProvider} from '@mui/material'
import { orange,green,red,cyan } from '@mui/material/colors';
declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
     
    }
  
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }

  declare module "@mui/material/styles"  {
     interface Palette {
       darkBackground:string;
     }

     interface PaletteOptions{
       darkBackground:string;
     }


  }

  declare module '@mui/material/styles'{
     interface Theme {
       relaxing : {
         peace:React.CSSProperties['color'],
         love:React.CSSProperties['color'],
         sleep:React.CSSProperties['color']
       }
     }

     interface ThemeOptions {
      relaxing : {
        peace:React.CSSProperties['color'],
        love:React.CSSProperties['color'],
        sleep:React.CSSProperties['color']
      }
     }

     interface Palette {
      nocturnalDark:React.CSSProperties['color']
     }
     interface PaletteOptions { 
       nocturnalDark:React.CSSProperties['color']
     }
  }
  
  declare module '@mui/material/Button'{
    interface ButtonPropsVariantOverrides {
      round:true;
    }
  }

export const ThemeGlobalProvider:React.FC = (props) => {
    const theme = createTheme({
        status: {
          danger: orange[500],
        },
        relaxing: {
          peace: green[500],
          love: red[200],
          sleep: cyan[500]
        },
        palette:{

          darkBackground:'linear-gradient(7deg, rgba(184,62,62,0.8267682072829132) 33%, rgba(207,219,62,0.7371323529411764) 41%, rgba(46,170,17,0.7875525210084033) 58%, rgba(77,192,195,0.773546918767507) 63%, rgba(112,84,254,0.7847514005602241) 69%, rgba(168,78,213,0.865983893557423) 72%, rgba(6,160,161,0.835171568627451) 94%)',
          nocturnalDark:'linear-gradient(163deg, rgba(0,0,0,0.8267682072829132) 28%, rgba(84,84,84,0.9640231092436975) 65%, rgba(136,136,136,0.9108018207282913) 100%)'
        },
        components:{
          MuiButton:{styleOverrides:{
            
          
            
          },
         variants:[
           {props:{variant:'round'},style:{
             borderRadius:'50%',background:'linear-gradient(to right, #0f0c29, #302b63, #24243e)',color:'white',
           }}
         ]
        }
        }
      });
  console.log("inside:")
  console.log(theme) 

    return (
       <ThemeProvider theme={theme}>
               {props.children}
       </ThemeProvider>
    )
}
