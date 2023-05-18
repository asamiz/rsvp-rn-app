import {StyleSheet} from 'react-native';
import fonts from 'theme/fonts';
import theme from 'theme';
import {RFValue} from 'utils';

export default StyleSheet.create({
  content: {
    backgroundColor: theme.colors.background,
  },
  safeAreaContainer: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    backgroundColor: theme.colors.background,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  drawer: {
    backgroundColor: theme.colors.primary,
    paddingTop: theme.spacing.xxl,
  },
  drawerLabel: {
    fontSize: RFValue(18),
    fontFamily: fonts.medium,
  },
});
