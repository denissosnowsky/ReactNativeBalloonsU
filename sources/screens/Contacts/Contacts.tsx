import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../../components/Loading/Loading";
import Error from "../Error/Error";
import {
  usePhonesQuery,
  useSocialNetsQuery,
} from "../../store/generated/graphql";
import { formatNumber } from "../../utils/formatNumber";
import { Link } from "native-base";
import { googleUrl } from "../../../config";
import Footer from "../../components/Foooter/Foooter";
import MyText from "../../components/MyText/MyText";
import { flex } from "styled-system";

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
              <MyText style={styles.phoneText}>
                {formatNumber(item?.number ? item?.number : "0")}
              </MyText>
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
        <Link href="mailto:PGroup.balloons@gmail.com" style={styles.linkBlock}>
          <MyText style={styles.email}>PGroup.balloons@gmail.com</MyText>
        </Link>
        <Link
          href="https://pgballoons.com"
          style={[styles.linkBlock, styles.linkLastBlock]}
        >
          <MyText style={styles.website}>pgballoons.com</MyText>
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
    color: "blue",
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
    fontSize: 23,
    textAlign: "center",
    color: "blue",
  },
  website: {
    fontSize: 23,
    textAlign: "center",
    color: 'blue',
    textDecorationLine: 'underline'
  },
  emailWrapper: {
    marginBottom: 30,
  },
  linkBlock: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 40,
  },
  linkLastBlock: {
    marginBottom: 0,
  },
});

export default Contacts;
