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
  const [count, setCount] = useState<number>(1);

  const handleCountMinus = () => {
    count > 1 && setCount(count - 1);
  };

  const handleCountPlus = () => {
    setCount(count + 1);
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
          <Text style={styles.name}>{info.name}</Text>
          <Text style={styles.name}>{info.subname}</Text>
        </View>

        <View style={[styles.flexColCenter]}>
          <Text style={styles.price}>{`${info.price} $`}</Text>
        </View>

        <View style={[styles.counterWrapper, styles.flexColCenter]}>
          <View style={[styles.flexRowCenter]}>
            <Pressable onPress={handleCountMinus}>
              <Entypo name="minus" size={35} color="black" />
            </Pressable>
            <Text style={styles.counter}>{count}</Text>
            <Pressable onPress={handleCountPlus}>
              <Entypo name="plus" size={35} color="black" />
            </Pressable>
          </View>
          <Pressable
            style={[{ backgroundColor: true ? "green" : "red" }, styles.button]}
          >
            <Text style={styles.buttonText}>
              {true ? "Add to Cart" : "Remove from Cart"}
            </Text>
          </Pressable>
        </View>

        <View style={[styles.flexColCenter]}>
          <Text style={styles.header}>Composition: </Text>
        </View>
        <Divider w={"90%"} bg={"#ccc"} />
        <View style={[styles.flexColStretch]}>
          <Text style={styles.text}>{info.description}</Text>
        </View>

        <Text style={styles.code}>{`Code: ${info.code}`}</Text>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 30
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
    fontWeight: "500",
    color: "#0d6efd",
  },
  price: {
    fontSize: 28,
    fontWeight: "500",
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
  },
  code: {
    fontSize: 15,
    fontWeight: "400",
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
  operation: {},
  counter: {
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default memo(Product);
