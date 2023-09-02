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
`

export default GlobalStyle
