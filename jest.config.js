module.exports = {
  preset: 'react-native',
  silent: true,
  setupFilesAfterEnv: [
    './jest.setup.js',
    '@testing-library/jest-native/extend-expect',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
