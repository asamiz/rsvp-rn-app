import {createTheme} from '@shopify/restyle';
import colors from './colors';
import {RHValue} from 'utils';

const theme = createTheme({
  colors: {
    primary: colors.softPeach,
    secondary: colors.zest,
    warning: colors.tulipTree,
    error: colors.guardsmanRed,
    background: colors.blueStone,
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
});

export type Theme = typeof theme;
export default theme;
