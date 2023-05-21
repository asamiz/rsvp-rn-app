import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../Button';
import {Text} from 'react-native';

describe('Button functionalities', () => {
  it('should render children successfully', () => {
    const {getByTestId} = render(
      <Button>
        <Text testID="test-text">{'Test Button'}</Text>
      </Button>,
    );
    expect(getByTestId('test-text')).toBeDefined();
  });

  it('should call onPress function successfully', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button testID="test-button" onPress={onPress} />,
    );
    fireEvent.press(getByTestId('test-button'));
    expect(onPress).toBeCalled();
  });
});
