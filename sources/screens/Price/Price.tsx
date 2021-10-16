import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";
import React, { useCallback } from "react";
import List from "../../components/List/List";
import { Divider } from "native-base";
import { useAssortmentQuery } from "../../store/generated/graphql";
import { showError } from "../../utils/showError";
import Error from "../Error/Error";
import Loading from "../../components/Loading/Loading";
import { AssortmentType } from "../../types/types";
import Footer from "../../components/Foooter/Foooter";

const Price: React.FC = () => {

  const { loading, error, data } = useAssortmentQuery();

  const renderItem: ListRenderItem<AssortmentType> = useCallback(({ item }) => {
    return <List key={item.id} name={item.name} price={item.price} />;
  }, []);

  const keyExtractor = useCallback((item: AssortmentType) => item.id, []);

  if (error) {
    showError("Error. Please, reload the app");
    return <Error />;
  }

  if(loading){
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={data?.assortment! as Array<AssortmentType>}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <Divider w={"100%"} style={styles.divider} />
        )}
        ListFooterComponent={<Footer />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 30
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
  },
  flatList: {
    width: "100%",
    flex: 1,
  }
});

export default Price;
