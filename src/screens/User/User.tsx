import React from 'react';
import {Container, Text} from 'components';
import {useRoute} from '@react-navigation/native';
import {UserScreenRouteProp} from 'types';
import {RHValue} from 'utils';
import fonts from 'theme/fonts';
import dayjs from 'dayjs';

const User = () => {
  const {params} = useRoute<UserScreenRouteProp>();
  const {user} = params;
  const formattedDayOfBirth = dayjs(user.dateOfBirth).format('DD/MM/YYYY');
  return (
    <Container paddingHorizontal="m">
      <Container
        paddingHorizontal="m"
        paddingVertical="l"
        borderWidth={2}
        borderRadius={RHValue(8)}
        borderColor="secondary"
        marginTop="l">
        <Text variant="h1" marginBottom="l">
          {user.name}
        </Text>
        <Text marginBottom="s">
          <Text fontFamily={fonts.bold} color="secondary">
            {'Address:'}
          </Text>{' '}
          {user.address}
        </Text>
        <Text marginBottom="s">
          <Text fontFamily={fonts.bold} color="secondary">
            {'Locality:'}
          </Text>{' '}
          {user.locality}
        </Text>
        <Text marginBottom="s">
          <Text fontFamily={fonts.bold} color="secondary">
            {'No. of guests:'}
          </Text>{' '}
          {user.numberOfGuests}
        </Text>
        <Text marginBottom="s">
          <Text fontFamily={fonts.bold} color="secondary">
            {'Age:'}
          </Text>{' '}
          {user.age}
        </Text>
        <Text marginBottom="s">
          <Text fontFamily={fonts.bold} color="secondary">
            {'Profession:'}
          </Text>{' '}
          {user.profession}
        </Text>
        <Text marginBottom="s">
          <Text fontFamily={fonts.bold} color="secondary">
            {'Birth Date:'}
          </Text>{' '}
          {formattedDayOfBirth}
        </Text>
      </Container>
    </Container>
  );
};

export default User;
