import {RegistrationScreen, ReportsScreen, SearchScreen} from 'screens';
import {DrawerRoutes} from 'types';

export const Routes: DrawerRoutes = {
  registration: {
    name: 'RegistrationScreen',
    component: RegistrationScreen,
    title: 'Registration',
  },
  reports: {
    name: 'ReportsScreen',
    component: ReportsScreen,
    title: 'Reports',
  },
  search: {
    name: 'SearchScreen',
    component: SearchScreen,
    title: 'Search',
  },
};
