import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import {ComponentType} from 'react';

export type DrawerStackParamList = {
  RegistrationScreen: undefined;
  ReportsScreen: undefined;
  SearchScreen: undefined;
};

type DrawerRoute = {
  name: keyof DrawerStackParamList;
  title?: string;
  component: ComponentType;
};

export type DrawerRoutes = {
  registration: DrawerRoute;
  search: DrawerRoute;
  reports: DrawerRoute;
};

// Navigation & Route Prop Types

export type RegistrationScreenNavigationProp = DrawerNavigationProp<
  DrawerStackParamList,
  'RegistrationScreen'
>;

export type RegistrationScreenRouteProp = RouteProp<
  DrawerStackParamList,
  'RegistrationScreen'
>;

export type ReportsScreenNavigationProp = DrawerNavigationProp<
  DrawerStackParamList,
  'ReportsScreen'
>;

export type ReportsScreenRouteProp = RouteProp<
  DrawerStackParamList,
  'ReportsScreen'
>;

export type SearchScreenNavigationProp = DrawerNavigationProp<
  DrawerStackParamList,
  'SearchScreen'
>;

export type SearchScreenRouteProp = RouteProp<
  DrawerStackParamList,
  'SearchScreen'
>;
