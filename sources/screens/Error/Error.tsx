import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Error: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.text}>{"Error :("}</Text>
      <Text style={styles.text}>Please, reload the app</Text>
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
