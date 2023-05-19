import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import {ComponentType} from 'react';
import {UserData} from './api';

export type DrawerStackParamList = {
  RegistrationScreen: undefined;
  ReportsScreen: undefined;
  SearchScreen: undefined;
  UserScreen: {user: UserData};
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
  user: DrawerRoute;
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

export type UserScreenNavigationProp = DrawerNavigationProp<
  DrawerStackParamList,
  'UserScreen'
>;

export type UserScreenRouteProp = RouteProp<DrawerStackParamList, 'UserScreen'>;
