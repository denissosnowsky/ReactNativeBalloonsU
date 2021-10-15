import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../../components/Loading/Loading";
import Error from "../Error/Error";
import { showError } from "../../utils/showError";
import {
  usePhonesQuery,
  useSocialNetsQuery,
} from "../../store/generated/graphql";
import { formatNumber } from "../../utils/formatNumber";
import { Link } from "native-base";
import { googleUrl } from "../../../config";
import Footer from "../../components/Foooter/Foooter";

const Contacts: React.FC = () => {
  const {
    loading: loadingPhone,
    error: errorPhone,
    data: dataPhone,
  } = usePhonesQuery();
  const {
    loading: loadingSocial,
    error: errorSocial,
    data: dataSocial,
  } = useSocialNetsQuery();

  if (errorPhone || errorSocial) {
    showError("Error. Please, reload the app");
    return <Error />;
  }

  if (loadingPhone || loadingSocial) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.phonesWrapper}>
        {dataPhone?.phones &&
          dataPhone?.phones.map((item) => (
            <Link href={`tel:${item?.number}`} key={item?.id}>
              <Text style={styles.phoneText}>
                {formatNumber(item?.number ? item?.number : "0")}
              </Text>
            </Link>
          ))}
      </View>
      <View style={styles.netsWrapper}>
        {dataSocial?.socialNets &&
          dataSocial?.socialNets.map((item) => (
            <Link href={`${item?.link}`} key={item?.id}>
              <View style={styles.net}>
                {item?.link && (
                  <Image
                    source={{ uri: `${googleUrl}${item.image.slice(1)}` }} //item.iamge has format '/image.png'. Here we have to delete '/'
                    style={styles.image}
                  />
                )}
              </View>
            </Link>
          ))}
      </View>
      <View style={styles.emailWrapper}>
        <Link href="mailto:pg-balloons@gmail.com">
          <Text style={styles.email}>pg-balloons@gmail.com</Text>
        </Link>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 15,
    paddingTop: 60,
  },
  phonesWrapper: {
    display: "flex",
    marginBottom: 40,
  },
  phoneText: {
    fontSize: 20,
    marginBottom: 10,
  },
  netsWrapper: {
    width: "100%",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  net: {
    width: 70,
    height: 70,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
  email: {
    fontSize: 20,
  },
  emailWrapper: {
    marginBottom: 30
  }
});

export default Contacts;
