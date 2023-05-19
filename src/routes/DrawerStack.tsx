import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerStackParamList} from 'types';
import Icon from 'react-native-vector-icons/Feather';
import {Routes} from './screens';
import styles from './styles';
import theme from 'theme';
import {Button} from 'components';
import {RHValue} from 'utils';

const {Screen, Navigator} = createDrawerNavigator<DrawerStackParamList>();

const HeaderLeft = ({navigation}) => {
  return (
    <Button variant="backButton" onPress={() => navigation.goBack()}>
      <Icon
        name="arrow-left"
        size={RHValue(28)}
        color={theme.colors.secondary}
      />
    </Button>
  );
};

const DrawerStack = () => {
  return (
    <Navigator
      backBehavior="order"
      initialRouteName={Routes.registration.name}
      screenOptions={{
        sceneContainerStyle: styles.content,
        headerStyle: styles.header,
        headerTintColor: theme.colors.secondary,
        headerTitle: '',
        drawerActiveTintColor: theme.colors.secondary,
        drawerHideStatusBarOnOpen: true,
        drawerStyle: styles.drawer,
        drawerLabelStyle: styles.drawerLabel,
      }}>
      <Screen
        component={Routes.registration.component}
        name={Routes.registration.name}
        options={{
          title: Routes.registration.title,
        }}
      />
      <Screen
        component={Routes.reports.component}
        name={Routes.reports.name}
        options={{
          title: Routes.reports.title,
        }}
      />
      <Screen
        component={Routes.search.component}
        name={Routes.search.name}
        options={{
          title: Routes.search.title,
        }}
      />
      <Screen
        component={Routes.user.component}
        name={Routes.user.name}
        options={({navigation}) => ({
          swipeEnabled: false,
          drawerItemStyle: {display: 'none'},
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Navigator>
  );
};

export default DrawerStack;
