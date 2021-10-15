import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 10,
  },
  logo: {
    resizeMode: 'contain',
    width: '70%'
  },
});

export default Welcome;
