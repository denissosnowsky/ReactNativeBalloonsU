import React, { memo, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Input } from "native-base";
import { priceInputValidator } from "../../utils/priceInputValidator";
import MyText from "../MyText/MyText";

interface ListWithCounterProps {
  name: string;
  price: number;
  fixed: boolean;
  clb?: (value: number | string) => void;
}

const ListWithCounter: React.FC<ListWithCounterProps> = ({
  name,
  price,
  clb,
  fixed,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    clb && clb(count);
  }, []);

  const handlePlus = () => {
    setCount((count) => count + 1);
    clb && clb(count + 1);
  };

  const handleMinus = () => {
    setCount((count) => (count > 0 ? count - 1 : count));
    clb && clb(count > 0 ? count - 1 : count);
  };

  return (
    <View style={styles.container}>
      <MyText style={styles.text}>{name}</MyText>
      <View style={styles.counterWrapper}>
        {fixed ? (
          <>
            <Pressable onPress={handleMinus}>
              <AntDesign name="minus" size={30} color="black" />
            </Pressable>
            <MyText style={styles.counter}>{count}</MyText>
            <Pressable onPress={handlePlus}>
              <AntDesign name="plus" size={30} color="black" />
            </Pressable>
          </>
        ) : (
          <View style={styles.inputWrapper}>
            <Input
              style={styles.input}
              placeholder="Enter price"
              variant="unstyled"
              keyboardType="numeric"
              value={
                priceInputValidator(+price)
                  ? String(priceInputValidator(+price))
                  : undefined
              }
              onChangeText={(text) => {
                clb && clb(text);
              }}
            />
          </View>
        )}
      </View>
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
  },
  text: {
    fontSize: 16,
    flex: 5,
    fontFamily: 'Roboto_500Medium'
  },
  price: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: "#e91e63",
    flex: 2,
    textAlign: "right",
  },
  counterWrapper: {
    flex: 3,
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  inputWrapper: {
    width: "100%",
  },
  input: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  }
});

export default memo(ListWithCounter);
