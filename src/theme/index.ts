import {createTheme} from '@shopify/restyle';
import colors from './colors';
import {RFValue, RHValue} from 'utils';
import fonts from './fonts';

const theme = createTheme({
  colors: {
    primary: colors.softPeach,
    secondary: colors.zest,
    warning: colors.tulipTree,
    error: colors.guardsmanRed,
    errorBackground: colors.pippin,
    background: colors.blueStone,
    disabled: colors.cararra,
    placeholder: colors.silver,
    border: colors.alto,
    white: colors.white,
    black: colors.black,
  },
  spacing: {
    xs: RHValue(4),
    s: RHValue(8),
    m: RHValue(16),
    l: RHValue(24),
    xl: RHValue(32),
    xxl: RHValue(40),
  },
  textVariants: {
    h1: {
      fontSize: RFValue(30),
      fontFamily: fonts.bold,
    },
    h2: {
      fontSize: RFValue(26),
      fontFamily: fonts.bold,
    },
    button: {
      fontSize: RFValue(18),
      fontFamily: fonts.bold,
      color: 'primary',
    },
    error: {
      fontSize: RFValue(14),
      fontFamily: fonts.regular,
      color: 'error',
    },
    label: {
      fontSize: RFValue(15),
      fontFamily: fonts.medium,
      color: 'primary',
    },
    defaults: {
      fontSize: RFValue(16),
      fontFamily: fonts.medium,
      color: 'primary',
    },
  },
  buttonVariants: {
    search: {
      width: RHValue(45),
      height: RHValue(45),
      borderRadius: RHValue(8),
    },
    defaults: {
      width: '100%',
      height: RHValue(50),
      backgroundColor: 'secondary',
      paddingVertical: 's',
      borderRadius: RHValue(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  inputVariants: {
    error: {
      backgroundColor: 'errorBackground',
      color: 'error',
      borderColor: 'error',
      borderRadius: RHValue(8),
      width: '100%',
      height: RHValue(50),
    },
    defaults: {
      backgroundColor: 'white',
      color: 'background',
      borderColor: 'border',
      borderRadius: RHValue(8),
      width: '100%',
      height: RHValue(50),
    },
  },
});

export type Theme = typeof theme;
export default theme;
