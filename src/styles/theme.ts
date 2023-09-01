const screen = {
  xs: '320px',
  sm: '425px',
  md: '750px',
  lg: '1080px',
  xl: '1436px',
}

const breakpoint = {
  mobileS: `screen and (max-width: ${screen.sm})`,
  mobileL: `screen and (max-width: ${screen.md})`,
  tablet: `screen and (max-width: ${screen.lg})`,
  laptop: `screen and (max-width: ${screen.xl})`,
}

const color = {
  primary: {
    main: '#FF9900',
    strong: '#FF8A00',
    heavy: '#FF7A00',
    alternative: '#FFC672',
    assistive: '#FFE4BC',
  },
  text: {
    main: '#171717',
    strong: '#000000',
    alternative: '#8A8A8A',
    assistive: '#C4C4C4',
    disable: '#DCDCDC',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F7',
    tertiary: '#F2F2F7',
  },
  status: {
    alert: '#714FD1',
    caution: '#D6459C',
    positive: '#005247',
  },
  line: {
    main: '#E1E2E4',
    alternative: '#F4F4F5',
    border: '#EEEEEE',
  },
  basic: { white: '#ffffff', black: '#000000', gray: '#666666' },
}

export const theme = {
  screen,
  breakpoint,
  color,
}
