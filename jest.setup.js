jest.mock('@shopify/restyle', () => {
  const RealModule = jest.requireActual('@shopify/restyle');
  const RN = jest.requireActual('react-native');
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f, c) => c || RN.View;
  return RealModule;
});

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        user: {
          address: 'Test User Address',
          age: '12',
          dateOfBirth: '2010-12-12T00:00:00.000Z',
          locality: 'Test User Locality',
          name: 'Test User',
          numberOfGuests: '2',
          profession: 'Employed',
        },
      },
    }),
  };
});
