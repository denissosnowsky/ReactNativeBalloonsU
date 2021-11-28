import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MyText from "../MyText/MyText";
import { ConvertedBasketObjType } from "../../types/types";

interface ListForBasketPropsType {
  data: ConvertedBasketObjType;
  order: number;
  countClb?: (arg: number) => void;
  deleteClb: () => void;
  totalPrice: number;
}

const ListForBasket: React.FC<ListForBasketPropsType> = ({
  data,
  order,
  countClb,
  deleteClb,
  totalPrice,
}) => {
  const [count, setCount] = useState<number>(data.quantity);
  useEffect(() => {
    countClb && countClb(count);
  }, []);

  const handlePlus = () => {
    setCount((count) => count + 1);
    countClb && countClb(count + 1);
  };

  const handleMinus = () => {
    setCount((count) => (count > 1 ? count - 1 : count));
    countClb && countClb(count > 1 ? count - 1 : count);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MyText style={styles.headerText}>{`${order}. ${data.leftText}`}</MyText>
        <Pressable style={styles.deleteSign} onPress={deleteClb}>
          <MaterialIcons name="delete" size={30} color="red" />
        </Pressable>
      </View>
      <View style={styles.main}>
        <Image
          source={{
            uri: `${data.image}`,
          }}
          style={styles.image}
        />
        <View style={styles.counterWrapper}>
          <Pressable onPress={handleMinus}>
            <AntDesign name="minus" size={30} color="black" />
          </Pressable>
          <MyText style={styles.counter}>{count}</MyText>
          <Pressable onPress={handlePlus}>
            <AntDesign name="plus" size={30} color="black" />
          </Pressable>
        </View>
        <MyText style={styles.price}>{`${totalPrice} $`}</MyText>
      </View>
      <View style={styles.footer}>
        <MyText style={styles.footerText}>
          <MyText style={styles.composition}>Composition: </MyText>
          {data.description}
        </MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    marginTop: 5,
  },
  footerText: {
    fontSize: 16,
  },
  headerText: {
    color: "#0d6efd",
    flex: 8,
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
  },
  deleteSign: {
    flex: 2,
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
  },
  image: {
    resizeMode: "contain",
    flex: 6,
    width: "100%",
    aspectRatio: 1 / 1,
    height: undefined,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  counterWrapper: {
    flex: 6,
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    color: "#e91e63",
    flex: 3,
    textAlign: "right",
  },
  counter: {
    fontSize: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  composition: {
    color: "#e91e63",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});

export default ListForBasket;
