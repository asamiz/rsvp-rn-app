import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {View, Text} from 'react-native';
import theme from 'theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>{'APP'}</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
