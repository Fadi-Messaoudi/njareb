import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputControl = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChange}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});

export default InputControl;
