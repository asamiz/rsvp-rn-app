module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          api: './src/api',
          components: './src/components',
          hooks: './src/hooks',
          routes: './src/routes',
          screens: './src/screens',
          theme: './src/theme',
          utils: './src/utils',
          types: './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
  ],
};
