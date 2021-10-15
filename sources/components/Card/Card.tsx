import { View } from "native-base";
import React, { memo } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { googleUrl } from "../../../config";

interface CardPropsType {
  name1: string;
  name2: string;
  image: string;
  price: number;
}

const Card: React.FC<CardPropsType> = ({name1, name2, image, price}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: `${googleUrl}${image}`,
          }}
          loadingIndicatorSource={require("../../../assets/loading.gif")}
        />
        <Text style={[styles.text, styles.text1]}>{`${name1}`}</Text>
        <Text style={[styles.text, styles.text2]}>{`${name2}`}</Text>
        <Text style={styles.price}>{`${price} $`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "97%",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    aspectRatio: 1 / 1,
    height: undefined,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    paddingLeft: 10,
    paddingRight: 10,
  },
  text1: {
    marginTop: 10,
  },
  text2: {
    marginBottom: 10,
  },
  price: {
    color: "#e91e63",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 10,
  },
});

export default memo(Card);
