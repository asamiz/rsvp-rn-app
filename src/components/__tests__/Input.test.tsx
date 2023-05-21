import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Input} from '../Input';

describe('Input functionalities', () => {
  it('should render value successfully', () => {
    const {getByTestId} = render(<Input value="test" testID="test-input" />);
    expect(getByTestId('test-input').props.value).toBe('test');
  });

  it('should render placeholder successfully', () => {
    const {getByTestId} = render(
      <Input
        value="not-test"
        placeholder="test-placeholder"
        testID="test-input"
      />,
    );
    expect(getByTestId('test-input').props.placeholder).toBe(
      'test-placeholder',
    );
  });

  it('should call onChangeText function successfully', () => {
    const onChangeText = jest.fn();
    const {getByTestId} = render(
      <Input
        value="test"
        placeholder="test-placeholder"
        testID="test-input"
        onChangeText={onChangeText}
      />,
    );
    fireEvent.changeText(getByTestId('test-input'));
    expect(onChangeText).toBeCalled();
  });
});
