import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
/* !Reset */
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

// ul[class],
// ol[class] {
//   padding-left: 0;
// }
ul,
ol {
  padding-left: 0;
}

html,
body {
  overflow-x: hidden;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  // text-rendering: optimizeSpeed;
  line-height: 1;
}

ul[class],
ol[class] {
  list-style: none;
}

a[class] {
  text-decoration: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: 0;
  padding: 0;
  background-color: transparent;
}

address {
  font-style: normal;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}


body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  color: $primiry-text-color;
  background-color: ${theme.colors.$primiryBgColor};
  line-height: 1.4;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section {
   margin-bottom: 60px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 375px;
  padding: 0 20px 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 24px;
    padding-right: 24px;
  }
}
`;
