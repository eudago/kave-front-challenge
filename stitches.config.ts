import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      loContrast: '#FFFFFF',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
    fonts: {
      poppins: 'Poppins, sans-serif',
      notoSerif: 'Noto Serif, serif',
    },
  },
  media: {
    M: '(min-width: 375px)',
    D: '(min-width: 1440px)',
  },
})

export const globalStyles = globalCss({
  'html, body': {
    margin: 0,
    padding: 0,
    background: '$loContrast',
    fontFamily: '$poppins',
  }
});