import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerStack from './DrawerStack';
import {ThemeProvider} from '@shopify/restyle';
import theme from 'theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: Infinity,
      networkMode: 'offlineFirst',
    },
  },
});

const RootNavigator = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <DrawerStack />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default RootNavigator;
