import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {KeyboardType, StyleSheet, TextInput} from 'react-native';
import {Container} from '../Container';
import theme, {Theme} from 'theme';
import {RFValue, RWValue} from 'utils';
import fonts from 'theme/fonts';

const InputVariant = createVariant({themeKey: 'inputVariants'});

const InputContainer = createRestyleComponent<
  VariantProps<Theme, 'inputVariants'> & React.ComponentProps<typeof Container>,
  Theme
>([InputVariant], Container);

type InputProps = React.ComponentProps<typeof InputContainer> & {
  left?: JSX.Element;
  right?: JSX.Element;
  value: string;
  placeholder: string;
  onChangeText?: (arg: string) => void;
  editable?: boolean;
  onBlur?: () => void;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  multiline?: boolean;
};

export const Input = ({
  variant,
  value,
  left,
  right,
  onChangeText,
  placeholder,
  keyboardType,
  onBlur,
  editable = true,
  secureTextEntry = false,
  multiline = false,
  ...rest
}: InputProps) => {
  return (
    <InputContainer marginBottom="s" variant={variant} {...rest}>
      {left && left}
      <TextInput
        value={value}
        placeholderTextColor={theme.colors.placeholder}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        onBlur={onBlur}
        keyboardType={keyboardType}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
      {right && right}
    </InputContainer>
  );
};
const styles = StyleSheet.create({
  input: {
    marginLeft: RWValue(8),
    flex: 1,
    fontSize: RFValue(16),
    fontFamily: fonts.medium,
    color: theme.colors.background,
  },
});
