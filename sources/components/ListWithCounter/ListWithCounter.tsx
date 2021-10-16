import React, { memo, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Input } from "native-base";
import { priceInputValidator } from "../../utils/priceInputValidator";

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
      <Text style={styles.text}>{name}</Text>
      <View style={styles.counterWrapper}>
        {fixed ? (
          <>
            <Pressable onPress={handleMinus}>
              <Entypo name="minus" size={35} color="black" />
            </Pressable>
            <Text style={styles.counter}>{count}</Text>
            <Pressable onPress={handlePlus}>
              <Entypo name="plus" size={35} color="black" />
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
    flex: 5,
    fontWeight: "500",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
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
    justifyContent: "space-between",
  },
  counter: {
    fontSize: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  inputWrapper: {
    width: "100%",
  },
  input: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
});

export default memo(ListWithCounter);
