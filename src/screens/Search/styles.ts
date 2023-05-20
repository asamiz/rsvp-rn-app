import {StyleSheet} from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: theme.spacing.m,
    paddingBottom: theme.spacing.l,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
