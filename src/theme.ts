import { extendTheme } from '@chakra-ui/react';
import './global.css';

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#CACDE1',
      900: '#5464BF',
    },
    light: '#F2F2F2',
    dark: '#0c0c0c',
  },
  fonts: {
    heading: '"Megrim", cursive',
    body: '"Montserrat", sans-serif',
    italic: '"Montaga", serif',
    description: '"Exo", sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        background:
          'linear-gradient(180deg, rgb(46, 46, 46) 0%, rgba(0,0,0,1) 100%)',
        color: 'light',
        fontFamily: 'fonts.body',
        scrollPaddingTop: '80px',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      a: {
        color: 'light',
        _hover: {
          color: 'brand.900',
        },
      },
    },
  },
});
