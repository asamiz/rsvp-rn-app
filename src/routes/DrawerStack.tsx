import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerStackParamList} from 'types';
import {Routes} from './screens';
import styles from './styles';
import theme from 'theme';

const {Screen, Navigator} = createDrawerNavigator<DrawerStackParamList>();

const DrawerStack = () => {
  return (
    <Navigator
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
    </Navigator>
  );
};

export default DrawerStack;
