import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import UEFAPlaystrong from "./fonts/UEFAPlaystrong/UEFAPlaystrong-Medium.ttf";
import river from "./fonts/The_Rivers/The_Rivers_Regular.ttf";
const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    padding: 0;
    margin: 0;
}
@font-face {
  font-family: "UEFAPlaystrong";
  src: url(${UEFAPlaystrong});
}
@font-face {
  font-family: "river";
  src: url(${river});
}
:root{
  --kaushan-font: "kaushan Script", sans-serif;
    --river-font:'river';
}
body {
  font-family: "UEFAPlaystrong";
  overflow-X:hidden;
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
