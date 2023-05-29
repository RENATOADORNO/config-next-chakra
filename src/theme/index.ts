import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

const colors = {
  gray: {
    1: '#fcfcfc',
    2: '#f8f8f8',
    3: '#f3f3f3',
    4: '#ededed',
    5: '#e8e8e8',
    6: '#e2e2e2',
    7: '#dbdbdb',
    8: '#c7c7c7',
    9: '#8f8f8f',
    10: '#858585',
    11: '#6f6f6f',
    12: '#171717',
  },
  grass: {
    1: '#fbfefb',
    2: '#f3fcf3',
    3: '#ebf9eb',
    4: '#dff3df',
    5: '#ceebcf',
    6: '#b7dfba',
    7: '#97cf9c',
    8: '#65ba75',
    9: '#46a758',
    10: '#3d9a50',
    11: '#297c3b',
    12: '#1b311e',
  }
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const fonts = {
  body: "var(--font-poppins), -apple-system, system-ui, sans-serif",
}

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
}

const fontWeights = {
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const spacing = {
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
}

const semanticTokens = {
  colors: {
    error: 'red.500',
    text: {
      default: 'gray.900',
      _dark: 'gray.50',
    },
  },
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    'html, body': {
      fontFamily: 'body',
      'kebabKase': 'antialiased',
    },
  }),
}


export const theme = extendTheme({
  colors,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  spacing,
  semanticTokens,
  styles
})