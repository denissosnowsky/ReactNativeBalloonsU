import { Divider } from "native-base";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../../components/Foooter/Foooter";
import ListWithCounter from "../../components/ListWithCounter/ListWithCounter";
import Loading from "../../components/Loading/Loading";
import MyText from "../../components/MyText/MyText";
import { useCounterInitState } from "../../hooks/useCounterInitState";
import { useAssortmentQuery } from "../../store/generated/graphql";
import { counterStateChanger } from "../../utils/counterStateChanger";
import { inputStateChanger } from "../../utils/inputStateChanger";
import { sumOfObjectValues } from "../../utils/sumOfObjectValues";
import Error from "../Error/Error";

const Calculator: React.FC = () => {
  const { loading, error, data } = useAssortmentQuery();

  const initialState = data
    ? useCounterInitState(data.assortment)
    : useCounterInitState([]);

  const [counters, setCounters] = useState<Record<string, number>>({});
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    setCounters(initialState);
  }, [data]);

  useEffect(() => {
    setSum(sumOfObjectValues(counters));
  }, [counters]);

  const handleCounterPrice = (property: string, initValue: number) => {
    return (value: number | string) => {
      setCounters(
        counterStateChanger(counters, property, Number(value), initValue)
      );
    };
  };

  const handleInputPrice = (property: string) => {
    return (value: number | string) => {
      setCounters(inputStateChanger(counters, property, value));
    };
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {data &&
            data?.assortment!.map((item) => (
              <View key={item!.id}>
                <ListWithCounter
                  name={item!.name}
                  fixed={item!.fixed}
                  price={
                    Object.values(counters).length > 0 ? counters[item!.id!] : 0
                  }
                  clb={
                    item!.fixed
                      ? handleCounterPrice(item!.id, Number(item!.price))
                      : handleInputPrice(item!.id)
                  }
                />
                <Divider w={"100%"} style={styles.divider} />
              </View>
            ))}
          <View style={styles.total}>
            <MyText style={styles.totalText}>TOTAL:</MyText>
            <MyText style={styles.totalText}>{`${sum} $`}</MyText>
          </View>
          <Footer />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
  },
  scrollView: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalText: {
    marginTop: 10,
    fontSize: 20,
    color: "#e91e63",
    fontFamily: "Roboto_700Bold",
  },
});

export default Calculator;
