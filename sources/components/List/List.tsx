import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ListPropsType {
  name: string;
  price: string;
}

const List: React.FC<ListPropsType> = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.price}>{`${price} $`}</Text>
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
  },
  text: {
    fontSize: 16,
    flex: 4,
    fontWeight: '500'
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#e91e63",
    flex: 3,
    textAlign: "right",
  },
});

export default List;
