import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "native-base";
import { useDeliveryPriceQuery } from "../../store/generated/graphql";
import Loading from "../../components/Loading/Loading";
import Error from "../Error/Error";
import { showError } from "../../utils/showError";
import Footer from "../../components/Foooter/Foooter";
import { ScrollView } from "react-native-gesture-handler";

const Delivery: React.FC = () => {
  const { loading, error, data } = useDeliveryPriceQuery();

  if (error) {
    showError("Error. Please, reload the app");
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>
          For purchases over $75 – <Text style={styles.red}>free</Text> delivery
          {"\n"}
          {"\n"}
          For purchases under $75 – delivery cost{" "}
          <Text style={[styles.red, { position: "relative" }]}>
            ${`${data?.deliveryPrice?.price}`}
          </Text>
          {"\n"}
          {"\n"}
          <Text style={styles.text2}>We work within Illinois</Text>
        </Text>
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
    fontWeight: "500",
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
    fontWeight: '500'
  },
  text2: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 25,
    color: "#e91e63",
    fontWeight: '500'
  },
  red: {
    color: "#e91e63",
    fontSize: 20,
    fontWeight: "500",
  }
});

export default Delivery;
