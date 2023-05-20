import React, {useState} from 'react';
import {ActivityIndicator, Alert, ScrollView} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import {Button, Input, Selector, Text} from 'components';
import {UserProfessionSelector, UserData} from 'types';
import styles from './styles';
import theme from 'theme';
import {useMutation} from '@tanstack/react-query';
import {submitUserData} from 'api';
import dayjs from 'dayjs';

const selectorData: UserProfessionSelector[] = [
  {
    id: 1,
    label: 'Student',
    value: 'Student',
  },
  {
    id: 2,
    label: 'Employed',
    value: 'Employed',
  },
];

const Registration = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {mutate, isLoading} = useMutation({
    mutationFn: submitUserData,
    onError: () =>
      Alert.alert(
        'Something went wrong',
        'Something went wrong, please try again',
      ),
    onSuccess: () => {
      Alert.alert(
        'Registered Successfully',
        'You have been registered successfully',
      );
      reset();
    },
  });
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
    reset,
  } = useForm<UserData>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      age: undefined,
      dateOfBirth: new Date('1923-01-01'),
      address: '',
      profession: selectorData[0].value,
      locality: '',
      numberOfGuests: undefined,
    },
  });

  const onSubmit: SubmitHandler<UserData> = (data: UserData) => {
    mutate({...data});
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Text variant="h2" marginBottom="m">
        {'Register now for the meeting!'}
      </Text>

      {/** Name */}
      <Text variant="label">{'Name*'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'Name field is required',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            value={value}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            variant={errors.name ? 'error' : undefined}
          />
        )}
        name="name"
      />
      {errors.name && (
        <Text variant="error" marginBottom="s">
          {errors.name?.message}
        </Text>
      )}

      {/** DOB */}
      <Text variant="label">{'Date of birth*'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'Date of birth field is required',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Input
              value={value?.toDateString()}
              placeholder="Date of birth"
              onTouchStart={() => setOpen(true)}
              onBlur={onBlur}
              onChangeText={onChange}
              editable={false}
              variant={errors.dateOfBirth ? 'error' : undefined}
            />
            <DatePicker
              modal
              open={open}
              date={value}
              mode="date"
              minimumDate={new Date('1923-01-01')}
              maximumDate={new Date()}
              onConfirm={date => {
                setOpen(false);
                setValue(
                  'age',
                  dayjs(new Date()).diff(date, 'year').toString(),
                );
                onChange(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </>
        )}
        name="dateOfBirth"
      />
      {errors.dateOfBirth && (
        <Text variant="error" marginBottom="s">
          {errors.dateOfBirth?.message}
        </Text>
      )}

      {/** Age */}
      <Text variant="label">{'Age'}</Text>
      <Controller
        control={control}
        render={({field: {value}}) => (
          <Input
            placeholder="Age calculated upon DOB selection"
            value={value}
            editable={false}
          />
        )}
        name="age"
      />

      {/** Profession */}
      <Text variant="label">{'Profession*'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'This field is required',
        }}
        render={({field: {onChange, value}}) => (
          <Selector
            selected={value}
            items={selectorData}
            onSelectItem={(item: string) => onChange(item)}
          />
        )}
        name="profession"
      />

      {/** Locality */}
      <Text variant="label">{'Locality*'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'Locality field is required',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            value={value}
            placeholder="Locality"
            onBlur={onBlur}
            onChangeText={onChange}
            variant={errors.locality ? 'error' : undefined}
          />
        )}
        name="locality"
      />
      {errors.locality && (
        <Text variant="error" marginBottom="s">
          {errors.locality?.message}
        </Text>
      )}

      {/** NOG */}
      <Text variant="label">{'Number of guests*'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'Number of guests field is required',
          pattern: {
            value: /[0-2]$/,
            message: 'Please enter a valid number of guests from 0 - 2 guests',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant={errors.numberOfGuests ? 'error' : undefined}
            keyboardType="number-pad"
            placeholder="Number of guests from 0 to 2"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="numberOfGuests"
      />
      {errors.numberOfGuests && (
        <Text variant="error" marginBottom="s">
          {errors.numberOfGuests?.message}
        </Text>
      )}

      {/** Address */}
      <Text variant="label">{'Address*'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'Address field is required',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant={errors.address ? 'multilineError' : 'multiline'}
            placeholder="Address"
            multiline
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="address"
      />
      {errors.address && (
        <Text variant="error" marginBottom="s">
          {errors.address?.message}
        </Text>
      )}

      <Button onPress={handleSubmit(onSubmit)} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <Text>{'Submit'}</Text>
        )}
      </Button>
    </ScrollView>
  );
};

export default Registration;
