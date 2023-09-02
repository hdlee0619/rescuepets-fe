import { createGlobalStyle } from 'styled-components'
import NotoSansKR from '@styles/fonts/NotoSansKR-Regular.woff'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Noto_Sans_KR";
  src: url(${NotoSansKR} format("woff");
  font-style: normal;
}
body {
  font-family: "Noto_Sans_KR",sans-serif;
}
img {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
}
`

export default GlobalStyle
