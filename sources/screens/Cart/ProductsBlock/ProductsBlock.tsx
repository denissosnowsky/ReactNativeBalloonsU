import React, { useEffect } from "react";
import { Divider } from "native-base";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import ListForBasket from "../../../components/ListForBasket/ListForBasket";
import MyText from "../../../components/MyText/MyText";
import { useCounterInitState } from "../../../hooks/useCounterInitState";
import { changeQuantInBasket } from "../../../utils/changeQuantInBasket";
import { counterStateChanger } from "../../../utils/counterStateChanger";
import { deleteFromBasket } from "../../../utils/deleteFromBasket";
import { sumOfObjectValues } from "../../../utils/sumOfObjectValues";
import { ConvertedBasketObjType } from "../../../types/types";

type ProductsBlockPropsType = {
  basket: Array<ConvertedBasketObjType>;
};

const ProductsBlock: React.FC<ProductsBlockPropsType> = ({ basket }) => {
  // make an object for initial value for useState. Made from id of the fetched data. Save here - 'id: price'
  const initialState = useCounterInitState(basket);

  const [counters, setCounters] =
    useState<Record<string, number>>(initialState);
  const [sum, setSum] = useState<number>(0);

  useMemo(() => setSum(sumOfObjectValues(counters)), [counters]);

  useEffect(() => {
    const countersIdsArr = Object.keys(counters);
    countersIdsArr.forEach((item) => {
      if (!basket.find((product) => product.id === item)) {
        const newObj: Record<string, number> = {};
        newObj[item]=0;
        setCounters((counters)=>({...Object.assign(counters, newObj)}));
      }
    });
  }, [basket]);

  const handleCounterPrice = (id: string, initValue: number) => {
    return (value: number) => {
      setCounters(counterStateChanger(counters, id, value, initValue));
      changeQuantInBasket && changeQuantInBasket(id, value);
    };
  };

  const handleDeleteItem = (id: string, initValue: number) => {
    setCounters(counterStateChanger(counters, id, 0, initValue));
    deleteFromBasket && deleteFromBasket(id);
  };

  return (
    <View style={styles.cardWrapper}>
      {basket.map((item, i) => (
        <View key={item.id}>
          <ListForBasket
            data={item}
            order={i + 1}
            countClb={handleCounterPrice(item.id, Number(item.rightText))}
            deleteClb={() => handleDeleteItem(item.id, Number(item.rightText))}
            totalPrice={counters[item.id]}
          />
          <Divider w={"100%"} style={styles.divider} />
        </View>
      ))}
      <View style={styles.total}>
        <MyText style={styles.totalText}>TOTAL:</MyText>
        <MyText style={styles.totalText}>{`${sum} $`}</MyText>
      </View>
    </View>
  );
};

export default ProductsBlock;

const styles = StyleSheet.create({
  cardWrapper: {
    paddingTop: 20,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  totalText: {
    marginTop: 10,
    fontSize: 20,
    color: "#e91e63",
    fontFamily: "Roboto_700Bold",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
