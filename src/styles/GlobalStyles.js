import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import "@fontsource/roboto";
import UEFAPlaystrong from "./fonts/UEFAPlaystrong/UEFAPlaystrong-Medium.ttf";
import river from "./fonts/The_Rivers/The_Rivers_Regular.ttf";
const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "UEFAPlaystrong";
  src: url(${UEFAPlaystrong});
}
@font-face {
  font-family: "river";
  src: url(${river});
}
:root{
    --river-font:'river';
}
body {
  font-family: "UEFAPlaystrong";
  line-height: 1.5;
}
.ball {
  height: 14px;
  width: 16px;
  z-index: 11;
  background-color: #131313;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


*,*::after,*::before{
    padding: 0;
    margin: 0;
}
body{
 
    overflow-X:hidden;
}
h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
}
a{
    color:inherit;
    text-decoration:none;
}
`;
export default GlobalStyles;
