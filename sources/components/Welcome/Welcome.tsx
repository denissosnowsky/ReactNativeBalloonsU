import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Welcome: React.FC = () => {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    position: "relative",
  },
  logoBackground: {
    alignItems: "center",
    justifyContent: "center",
  },
  wall: {
    width: "100%",
    height: "100%",
  },
});

export default Welcome;
