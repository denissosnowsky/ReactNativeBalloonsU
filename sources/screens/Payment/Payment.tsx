import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider, Link } from "native-base";
import Footer from "../../components/Foooter/Foooter";
import { ScrollView } from "react-native-gesture-handler";

const Payment: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          You can pay for purchases by credit card or cash{" "}
          {/* or pay online on our
        website */}
          .
        </Text>
        <Text style={styles.header}>How to cancel and change</Text>
        <Divider w={"100%"} style={styles.divider} />

        <Text style={styles.text}>
          Please send your request by email to{" "}
          <Link href="mailto:pg-balloons@gmail.com">
            <Text style={styles.email}>pg-balloons@gmail.com</Text>
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
  email: {
    color: "#e91e63",
    fontSize: 18,
  },
});

export default Payment;
