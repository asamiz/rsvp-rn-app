import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {Button, Container, Input, Text} from 'components';
import React, {useState} from 'react';
import fonts from 'theme/fonts';
import {RHValue} from 'utils';
import styles from './styles';
import {SearchScreenNavigationProp, UserData} from 'types';
import {useNavigation} from '@react-navigation/native';

const dummyData: UserData[] = [
  {
    id: '1',
    name: 'John Doe',
    locality: 'Locality1',
    age: 14,
    dateOfBirth: new Date(),
    address: 'Address 1',
    numberOfGuests: 2,
    profession: 'Student',
  },
  {
    id: '2',
    name: 'Jane Doe',
    locality: 'Locality2',
    age: 17,
    dateOfBirth: new Date(),
    address: 'Address 2',
    numberOfGuests: 0,
    profession: 'Student',
  },
  {
    id: '3',
    name: 'Frank Doe',
    locality: 'Locality3',
    age: 14,
    dateOfBirth: new Date(),
    address: 'Address 3',
    numberOfGuests: 1,
    profession: 'Employed',
  },
];

const Search = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const [searchValue, setSearchValue] = useState<string>('');

  const onChangeText = (value: string) => {
    setSearchValue(value);
  };

  const renderItem = ({item: user}: ListRenderItemInfo<UserData>) => {
    return (
      <Button
        activeOpacity={1}
        variant="userCard"
        onPress={() => navigation.navigate('UserScreen', {user})}>
        <Text>{user.name}</Text>
        <Text color="secondary" fontFamily={fonts.bold}>
          {user.locality}
        </Text>
      </Button>
    );
  };
  return (
    <>
      <Container paddingHorizontal="m" marginTop="s">
        <Text variant="h1" marginBottom="m">
          {'Search'}
        </Text>
        <Input
          value={searchValue}
          onChangeText={onChangeText}
          placeholder="Enter user name or locality .."
        />
      </Container>
      <FlashList
        contentContainerStyle={styles.contentContainer}
        estimatedItemSize={RHValue(80)}
        data={dummyData}
        renderItem={renderItem}
      />
    </>
  );
};

export default Search;
