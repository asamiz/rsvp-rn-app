import React from 'react';
import {Container} from '../Container';
import {Button} from '../Button';
import {Text} from '../Text';
import {SelectorItemData} from 'types';
import {RHValue} from 'utils';

type Props = {
  items: SelectorItemData[];
  onSelectItem: (selectedItem: SelectorItemData) => void;
  selected: SelectorItemData;
};

export const Selector = ({items, onSelectItem, selected}: Props) => {
  return (
    <Container
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
            activeOpacity={1}
            onPress={() => onSelectItem(item)}
            disabled={selected.id === item.id}
            variant={
              selected.id === item.id
                ? 'activeSelectorItem'
                : 'inActiveSelectorItem'
            }>
            <Text>{item.label}</Text>
          </Button>
        </Container>
      ))}
    </Container>
  );
};
