import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyText from "../../components/MyText/MyText";

const Error: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyText style={styles.text}>{"Error :("}</MyText>
      <MyText style={styles.text}>Please, reload the app</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#e91e63'
    } 
  });

export default Error;
