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
import { useCounterInitState } from "../../hooks/useCounterInitState";
import { useAssortmentQuery } from "../../store/generated/graphql";
import { counterStateChanger } from "../../utils/counterStateChanger";
import { inputStateChanger } from "../../utils/inputStateChanger";
import { showError } from "../../utils/showError";
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
    showError("Error. Please, reload the app");
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {data &&
              data?.assortment!.map((item) => (
                <View key={item!.id}>
                  <ListWithCounter
                    name={item!.name}
                    fixed={item!.fixed}
                    price={
                      Object.values(counters).length > 0
                        ? counters[item!.id!]
                        : 0
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
          </KeyboardAvoidingView>
          <View style={styles.total}>
            <Text style={styles.totalText}>TOTAL:</Text>
            <Text style={styles.totalText}>{`${sum} $`}</Text>
          </View>
          <Footer />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 30,
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
  },
  scrollView: {
    width: "100%",
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
    fontWeight: "700",
  },
});

export default Calculator;
