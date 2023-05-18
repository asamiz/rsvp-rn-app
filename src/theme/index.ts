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
    background: colors.blueStone,
    disabled: colors.cararra,
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
});

export type Theme = typeof theme;
export default theme;
