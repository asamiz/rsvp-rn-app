import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Selector} from '../Selector';
import {SelectorItemData} from 'types';
import {ThemeProvider} from '@shopify/restyle';
import theme from 'theme';

const dummySelectors: SelectorItemData[] = [
  {
    id: 1,
    value: 'test item 1',
    label: 'Test Item 1',
  },
  {
    id: 2,
    value: 'test item 2',
    label: 'Test Item 2',
  },
];

describe('Selector functionalities', () => {
  it('should render items correctly', () => {
    const onSelectItem = jest.fn();
    const {getByTestId} = render(
      <ThemeProvider theme={theme}>
        <Selector
          items={dummySelectors}
          onSelectItem={onSelectItem}
          selected={dummySelectors[0].value}
          selectorTestID="test-selector"
        />
      </ThemeProvider>,
    );
    expect(getByTestId('test-selector-1-text').children[0]).toBe('Test Item 1');
  });

  it('should call onSelectItem', () => {
    const onSelectItem = jest.fn();
    const {getByTestId} = render(
      <ThemeProvider theme={theme}>
        <Selector
          items={dummySelectors}
          onSelectItem={onSelectItem}
          selected={dummySelectors[0].value}
          selectorTestID="test-selector"
        />
      </ThemeProvider>,
    );
    fireEvent.press(getByTestId('test-selector-2'));
    expect(onSelectItem).toBeCalled();
  });
});
