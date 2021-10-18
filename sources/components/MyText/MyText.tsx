import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface MyTextPropsType{
    style?: StyleProp<TextStyle>
}

const MyText: React.FC<MyTextPropsType> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto_400Regular'
    }
});

export default MyText;
