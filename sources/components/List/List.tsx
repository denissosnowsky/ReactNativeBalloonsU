import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "../MyText/MyText";

interface ListPropsType {
  name: string;
  price: string;
}

const List: React.FC<ListPropsType> = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <MyText style={styles.text}>{name}</MyText>
      <MyText style={styles.price}>{`${price} $`}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50
  },
  text: {
    fontSize: 16,
    flex: 4,
    fontFamily: 'Roboto_500Medium'
  },
  price: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: "#e91e63",
    flex: 3,
    textAlign: "right",
  },
});

export default List;
