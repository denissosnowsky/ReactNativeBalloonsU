import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Image
        source={require("../../../assets/smallLogo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: "100%",
    resizeMode: "contain",
  },
  footer: {
    height: 50,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Footer;
