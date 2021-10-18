import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "native-base";
import { useDeliveryPriceQuery } from "../../store/generated/graphql";
import Loading from "../../components/Loading/Loading";
import Error from "../Error/Error";
import Footer from "../../components/Foooter/Foooter";
import { ScrollView } from "react-native-gesture-handler";
import MyText from "../../components/MyText/MyText";

const Delivery: React.FC = () => {
  const { loading, error, data } = useDeliveryPriceQuery();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MyText style={styles.text}>
          For purchases over $75 – <MyText style={styles.red}>free</MyText>{" "}
          delivery
          {"\n"}
          {"\n"}
          For purchases under $75 – delivery cost{" "}
          <MyText style={[styles.red, { position: "relative" }]}>
            ${`${data?.deliveryPrice?.price}`}
          </MyText>
          {"\n"}
          {"\n"}
          <MyText style={styles.text2}>We work within Illinois</MyText>
        </MyText>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 60,
  },
  header: {
    color: "#0d6efd",
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 25,
    fontFamily: 'Roboto_500Medium',
  },
  text2: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 25,
    color: "#e91e63",
    fontFamily: 'Roboto_500Medium',
  },
  red: {
    color: "#e91e63",
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
  },
});

export default Delivery;
