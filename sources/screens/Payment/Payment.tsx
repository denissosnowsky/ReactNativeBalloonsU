import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider, Link } from "native-base";
import Footer from "../../components/Foooter/Foooter";
import { ScrollView } from "react-native-gesture-handler";
import MyText from "../../components/MyText/MyText";

const Payment: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MyText style={styles.text}>
          You can pay for purchases by credit card or cash{" "}
          {/* or pay online on our
        website */}
          .
        </MyText>
        <MyText style={styles.header}>How to cancel and change</MyText>
        <Divider w={"100%"} style={styles.divider} />

        <MyText style={styles.text}>
          Please send your request by email to{" "}
          <Link href="mailto:pg-balloons@gmail.com">
            <MyText style={styles.email}>pg-balloons@gmail.com</MyText>
          </Link>
          {"\n"}
          {"\n"}
          Please consider your order canceled or changed only when you have
          received a confirmation by email.
          {"\n"}
          {"\n"}
          The deadline to modify or cancel and order is 9 am, Eastern Time (New
          York), two days prior to delivery. Orders cancelled or changed after
          this deadline will not be refunded.
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
    fontFamily: 'Roboto_500Medium'
  },
  email: {
    color: "#e91e63",
    fontSize: 18,
  },
});

export default Payment;
