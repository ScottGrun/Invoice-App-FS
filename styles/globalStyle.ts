import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    /* Props to https://medium.com/geekculture/headless-woocommerce-next-js-set-up-styled-components-with-typescript-and-next-js-18cc047ccd79 for the following 
    border box tips */
 
    /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;

  }
  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
  box-sizing: border-box;
  }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  background-color: ${(p) => p.theme.COLORS.body.bg};
  color: ${(p) => p.theme.COLORS.body.color};

}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a{
  text-decoration: none;
  color: inherit;
}

button{
  border: none;
}

/* Custom Scrollbar */

::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: transparent;  
}

::-webkit-scrollbar-thumb {
  background-color: #DFE3FA;    /* color of the scroll thumb */
  border-radius: 4px;
}

`;

export default GlobalStyle;
