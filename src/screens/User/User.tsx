import React from 'react';
import {Container, Text} from 'components';
import {useRoute} from '@react-navigation/native';
import {UserScreenRouteProp} from 'types';
import {RHValue} from 'utils';
import fonts from 'theme/fonts';

const User = () => {
  const {params} = useRoute<UserScreenRouteProp>();
  const {user} = params;
  return (
    <Container paddingHorizontal="m">
      <Container
        paddingHorizontal="m"
        paddingVertical="l"
        borderWidth={2}
        borderRadius={RHValue(8)}
        borderColor="secondary"
        marginTop="l">
        <Text variant="h1">{user.name}</Text>
        <Container
          flexDirection="row"
          marginTop="m"
          alignItems="center"
          justifyContent="space-between">
          <Text>
            <Text fontFamily={fonts.bold} color="secondary">
              {'Address:'}
            </Text>{' '}
            {user.address}
          </Text>
          <Text>
            <Text fontFamily={fonts.bold} color="secondary">
              {'Locality:'}
            </Text>{' '}
            {user.locality}
          </Text>
        </Container>
        <Container
          flexDirection="row"
          marginTop="m"
          alignItems="center"
          justifyContent="space-between">
          <Text>
            <Text fontFamily={fonts.bold} color="secondary">
              {'No. of guests:'}
            </Text>{' '}
            {user.numberOfGuests}
          </Text>
          <Text>
            <Text fontFamily={fonts.bold} color="secondary">
              {'Age:'}
            </Text>{' '}
            {user.age}
          </Text>
        </Container>
        <Container
          flexDirection="row"
          marginTop="m"
          alignItems="center"
          justifyContent="space-between">
          <Text>
            <Text fontFamily={fonts.bold} color="secondary">
              {'Profession:'}
            </Text>{' '}
            {user.profession}
          </Text>
        </Container>
        <Container
          flexDirection="row"
          marginTop="m"
          alignItems="center"
          justifyContent="space-between">
          <Text>
            <Text fontFamily={fonts.bold} color="secondary">
              {'Birth Date:'}
            </Text>{' '}
            {user.dateOfBirth.toDateString()}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default User;
