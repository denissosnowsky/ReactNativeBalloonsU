import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Divider } from "native-base";
import React, { memo, useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { googleUrl } from "../../../config";
import { RootBalloonsStackParamList } from "../../navigation/stackNav/StackBalloonsNavigation";
import { RootBouquetsStackParamList } from "../../navigation/stackNav/StackBouquetsNavigation";
import Footer from "../Foooter/Foooter";
import Entypo from "@expo/vector-icons/Entypo";
import MyText from "../MyText/MyText";
import { deleteFromBasket } from "../../utils/deleteFromBasket";
import { addToBasket } from "../../utils/addToBasket";
import { useGetBasketValues } from "../../hooks/useGetBasketValues";

type BalloonScreenProps = NativeStackScreenProps<
  RootBalloonsStackParamList,
  "Balloon"
>;
type BouquetScreenProps = NativeStackScreenProps<
  RootBouquetsStackParamList,
  "Bouquet"
>;
type ProductPropsType = BalloonScreenProps | BouquetScreenProps;

const Product: React.FC<ProductPropsType> = ({
  route: {
    params: { info },
  },
}) => {

  const basket = useGetBasketValues();

  const [count, setCount] = useState<number>(
    info.basketStatus && info.basketStatus!.isInBasket
      ? info.basketStatus!.basketQuantity!
      : 1
  );

  const handleCountMinus = () => {
    count > 1 && setCount(count - 1);
  };

  const handleCountPlus = () => {
    setCount(count + 1);
  };

  const handleDeleteItem = (id: string) => {
    deleteFromBasket && deleteFromBasket(id);
  };

  const handleAddToBasket = () => {
    addToBasket({
      name: `${info.name} ${info.subname}`,
      price: info.price,
      quantity: count,
      code: info.code,
      description: info.description,
      image: `${googleUrl}${info.image}`,
      id: info.id,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${googleUrl}${info.image}` }}
        style={styles.image}
        loadingIndicatorSource={require("../../../assets/loading2.gif")}
      />

      <View style={styles.flexColCenter}>
        <View style={[styles.flexColCenter, styles.nameWrapper]}>
          <MyText style={styles.name}>{info.name}</MyText>
          <MyText style={styles.name}>{info.subname}</MyText>
        </View>

        <View style={[styles.flexColCenter]}>
          <MyText style={styles.price}>{`${info.price} $`}</MyText>
        </View>

        <View style={[styles.counterWrapper, styles.flexColCenter]}>
          <View style={[styles.flexRowCenter]}>
            <Pressable onPress={handleCountMinus}>
              <Entypo name="minus" size={35} color="black" />
            </Pressable>
            <MyText style={styles.counter}>{count}</MyText>
            <Pressable onPress={handleCountPlus}>
              <Entypo name="plus" size={35} color="black" />
            </Pressable>
          </View>
          <Pressable
            style={[
              {
                backgroundColor: !basket.find(item=>item.id===info.id)
                  ? "green"
                  : "#e91e63",
              },
              styles.button,
            ]}
            onPress={
              !basket.find(item=>item.id===info.id)
                ? handleAddToBasket
                : () => handleDeleteItem(info.id)
            }
          >
            <MyText style={styles.buttonText}>
              {!basket.find(item=>item.id===info.id)
                ? "Add to Cart"
                : "Remove from Cart"}
            </MyText>
          </Pressable>
        </View>

        <View style={[styles.flexColCenter]}>
          <MyText style={styles.header}>Composition: </MyText>
        </View>
        <Divider w={"90%"} bg={"#ccc"} />
        <View style={[styles.flexColStretch]}>
          <MyText style={styles.text}>{info.description}</MyText>
        </View>

        <MyText style={styles.code}>{`Code: ${info.code}`}</MyText>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 30,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    aspectRatio: 1 / 1,
    height: undefined,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  flexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  flexColStretch: {
    width: "90%",
    marginTop: 5,
    marginBottom: 30,
  },
  nameWrapper: {
    marginBottom: 10,
    marginTop: 10,
  },
  name: {
    fontSize: 28,
    fontFamily: "Roboto_500Medium",
    color: "#0d6efd",
  },
  price: {
    fontSize: 28,
    fontFamily: "Roboto_500Medium",
    color: "#e91e63",
  },
  header: {
    color: "#000",
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    textAlign: "justify"
  },
  code: {
    fontSize: 15,
  },
  counterWrapper: {
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    minWidth: "50%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  counter: {
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default memo(Product);
