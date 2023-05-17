module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
