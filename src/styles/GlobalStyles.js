import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import "@fontsource/dancing-script"
const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    padding: 0;
    margin: 0;
}
body{
    font-family:'Sirin Stencil';
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
