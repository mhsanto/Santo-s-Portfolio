import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import "@fontsource/poppins";
const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    padding: 0;
    margin: 0;
}
body{
  font-family: 'Poppins',sans-serif;
    background-color: rgb(224,223,221);
    color: #060f08;
    overflow-X:hidden;
}
a{
    color:inherit;
    text-decoration:none;
}
img{
    max-width: 100%;
}
`;

export const ContainerMain = styled.div`
  position: relative;
  padding: 0 4rem;
  margin-inline: auto;
`;
export default GlobalStyles;
