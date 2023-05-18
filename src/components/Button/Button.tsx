import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Theme} from 'theme';

const buttonVariant = createVariant({themeKey: 'buttonVariants'});

type ButtonProps = React.ComponentProps<typeof ButtonContainer>;

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    React.ComponentProps<typeof TouchableOpacity> & {
      children?: React.ReactNode;
    },
  Theme
>([buttonVariant], TouchableOpacity);

export const Button = ({
  onPress,
  children,
  disabled,
  testID,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer
      onPress={onPress}
      testID={testID}
      disabled={disabled}
      variant={variant}
      {...rest}>
      {children}
    </ButtonContainer>
  );
};
