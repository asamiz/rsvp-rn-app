import React, {useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import {Button, Input, Selector, Text} from 'components';
import {SelectorItemData} from 'types';
import styles from './styles';
import theme from 'theme';

const selectorData: SelectorItemData[] = [
  {
    id: 1,
    label: 'Student',
    value: 'student',
  },
  {
    id: 2,
    label: 'Employed',
    value: 'employed',
  },
];

type Inputs = {
  name: string;
  age: number;
  dateOfBirth: Date;
  profession: SelectorItemData;
  locality: string;
  numberOfGuests: number;
  address: string;
};

const Registration = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isLoading},
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      age: 20,
      dateOfBirth: new Date('1923-01-01'),
      address: '',
      profession: selectorData[0],
      locality: '',
      numberOfGuests: 0,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Text variant="h2" marginBottom="m">
        {'Register now for the meeting!'}
      </Text>

      {/** Name */}
      <Text variant="label">{'Name'}</Text>
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

      {/** Age */}
      <Text variant="label">{'Age'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'Age field is required',
          pattern: {
            value: /^[1-9]?[0-9]{1}$|^100$/,
            message: 'Please enter a valid age from 1 year to 100 years',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant={errors.age ? 'error' : undefined}
            keyboardType="number-pad"
            placeholder="Age"
            value={String(value)}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="age"
      />
      {errors.age && (
        <Text variant="error" marginBottom="s">
          {errors.age?.message}
        </Text>
      )}

      {/** DOB */}
      <Text variant="label">{'Date of birth'}</Text>
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
              onConfirm={date => {
                setOpen(false);
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

      {/** Profession */}
      <Text variant="label">{'Profession'}</Text>
      <Controller
        control={control}
        rules={{
          required: 'This field is required',
        }}
        render={({field: {onChange, value}}) => (
          <Selector
            selected={value}
            items={selectorData}
            onSelectItem={(item: SelectorItemData) => onChange(item)}
          />
        )}
        name="profession"
      />

      {/** Locality */}
      <Text variant="label">{'Locality'}</Text>
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
      <Text variant="label">{'Number of guests'}</Text>
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
            placeholder="Number of guests"
            value={String(value)}
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
      <Text variant="label">{'Address'}</Text>
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

      <Button
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid || isLoading}
        variant={!isValid ? 'disabled' : undefined}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.background} />
        ) : (
          <Text color={!isValid ? 'background' : undefined}>{'Submit'}</Text>
        )}
      </Button>
    </ScrollView>
  );
};

export default Registration;
