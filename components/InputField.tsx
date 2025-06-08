import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

// Define props interface
interface InputFieldProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      {...props} // Allows passing additional props like autoCapitalize, maxLength, etc.
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 50,
    paddingLeft: 10,
    borderRadius: 8, // Added rounded corners for better UI
    backgroundColor: '#fff',
  },
});

export default InputField;
