import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {getUsers} from 'api';
import {Button, Container, Input, Selector, Text} from 'components';
import fonts from 'theme/fonts';
import {RHValue} from 'utils';
import styles from './styles';
import {
  SearchScreenNavigationProp,
  SelectorItemData,
  UserData,
  UsersResponse,
} from 'types';
import theme from 'theme';
import {useDebounce} from 'hooks';

const searchFilters: SelectorItemData[] = [
  {
    id: 1,
    label: 'By Name',
    value: 'name',
  },
  {
    id: 2,
    label: 'By Locality',
    value: 'locality',
  },
];

const ListEmptyComponent = () => {
  return (
    <Container marginTop="xxl">
      <Text>{'There are no results matches your search input'}</Text>
    </Container>
  );
};

const Search = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const [searchValue, setSearchValue] = useState<string>('');
  const [filter, setFilter] = useState<string>(searchFilters[0].value);
  const debouncedSearch: string = useDebounce<string>(searchValue, 500);

  const {data: response, isLoading} = useQuery<UsersResponse, Error>(
    ['users', debouncedSearch, filter],
    () => getUsers({filter, value: debouncedSearch}),
    {staleTime: 500},
  );

  const onChangeText = (value: string) => {
    setSearchValue(value);
  };

  const renderItem = ({item: user}: ListRenderItemInfo<UserData>) => {
    return (
      <Button
        activeOpacity={1}
        variant="userCard"
        onPress={() => navigation.navigate('UserScreen', {user})}>
        <Text marginBottom="s">{user.name}</Text>
        <Text color="secondary" fontFamily={fonts.bold}>
          {user.locality}
        </Text>
      </Button>
    );
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        color={theme.colors.secondary}
      />
    );
  }

  return (
    <>
      <Container paddingHorizontal="m" marginTop="s">
        <Text variant="h1" marginBottom="m">
          {'Search'}
        </Text>
        <Selector
          items={searchFilters}
          selected={filter}
          onSelectItem={(value: string) => setFilter(value)}
        />
        <Input
          value={searchValue}
          onChangeText={onChangeText}
          placeholder="Enter user name or locality .."
        />
      </Container>
      <FlashList
        contentContainerStyle={styles.contentContainer}
        estimatedItemSize={RHValue(80)}
        data={response?.items.flat()}
        renderItem={renderItem}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </>
  );
};

export default Search;
