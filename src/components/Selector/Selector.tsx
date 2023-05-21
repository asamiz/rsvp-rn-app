import React from 'react';
import {Container} from '../Container';
import {Button} from '../Button';
import {Text} from '../Text';
import {SelectorItemData} from 'types';
import {RHValue} from 'utils';

type Props = {
  items: SelectorItemData[];
  onSelectItem: (value: string) => void;
  selected: string;
  testID?: string;
  selectorTestID?: string;
};

export const Selector = ({
  items,
  onSelectItem,
  selected,
  testID,
  selectorTestID,
}: Props) => {
  return (
    <Container
      testID={testID}
      backgroundColor="background"
      borderColor="secondary"
      borderWidth={3}
      flexDirection="row"
      overflow="hidden"
      marginBottom="m"
      borderRadius={RHValue(8)}>
      {items.map(item => (
        <Container key={item.id} flexGrow={1}>
          <Button
            testID={`${selectorTestID}-${item.id}`}
            activeOpacity={1}
            onPress={() => onSelectItem(item.value)}
            disabled={selected === item.value}
            variant={
              selected === item.value
                ? 'activeSelectorItem'
                : 'inActiveSelectorItem'
            }>
            <Text testID={`${selectorTestID}-${item.id}-text`}>
              {item.label}
            </Text>
          </Button>
        </Container>
      ))}
    </Container>
  );
};
