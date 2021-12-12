# How it works

Each branch in this project shows some examples on some of MUI features.

+ createthemes-typescript 
shows how to create a theme and custom properties and add them to the typescript interfaces

---


+ style-components
how to customize some mui components using basic css

---

+ customize-components
how to customize components:
examples:
-components
|-SxSlider
|-nestedSlider

  **SxSlider** is an example on how to use sx prop to customize a component.
  **nestedSlider** is an example on how to customize overriding the mui css classes: mui classes have this name structure : `Mui[Component name]-[name of the slot]`,
  the sx property is very flexible you can access all the classes of the nested components
  **fancySwitch** a switch that uses state to change the style of a div
  
 ---
  
+ globalComponent: how to set a global style
  It is a good practice to hoist the <GlobalStyles /> to a static constant, to avoid rerendering. This will ensure that the <style> tag generated would not recalculate on each render. 
 just put the globalStyles component outside of the components so it wont rerender!
 
 ```tsx
  import * as React from 'react';
 import GlobalStyles from '@mui/material/GlobalStyles';

+const inputGlobalStyles = <GlobalStyles styles={...} />;

 const Input = (props) => {
   return (
     <React.Fragment>
-      <GlobalStyles styles={...} />
+      {inputGlobalStyles}
       <input {...props} />
     </React.Fragment>
   )
 }
 
 ```
 In my project example, I created a GlobalStyleComponent
 Inside the globalStyle I added some personalization to the component and the h1, as you can se you can also add customization to classes and other stuff:
 
 ```tsx
 import GlobalStyles from "@mui/material/GlobalStyles";
 export const GlobalStyle = (
  <GlobalStyles
    styles={{ h1: {color:"magenta"}, 
    ".sweet-pink": { backgroundColor: "pink" } }}  // i defined a class inside GlobalStyles! it will become a global-css on the dom
  />
);
 ```
 Inside the App.tsx i added it and called the component:`
 import { GlobalStyle } from "./GlobalStyle/GlobalStyleComponent";`
 
 ---
 
+ theme-components-attribute
inside the theme object there is an attribute called components:
 in this branch i edited my themeprovider: 
 go inside theme provider to check the components property
 its possible to add a componentn Variant:
 
 inside the theme i defined my personalized variant button! 
 

 
  
