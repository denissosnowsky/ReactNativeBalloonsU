import { Divider } from "native-base";
import React, { useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import Footer from "../../components/Foooter/Foooter";
import ListWithCounter from "../../components/ListWithCounter/ListWithCounter";
import Loading from "../../components/Loading/Loading";
import { useAssortmentQuery } from "../../store/generated/graphql";
import { AssortmentType } from "../../types/types";
import { showError } from "../../utils/showError";
import Error from "../Error/Error";

const Calculator: React.FC = () => {
  const { loading, error, data } = useAssortmentQuery();

  const renderItem: ListRenderItem<AssortmentType> = useCallback(({ item }) => {
    return (
      <ListWithCounter key={item.id} name={item.name} price={item.price} />
    );
  }, []);

  const keyExtractor = useCallback((item: AssortmentType) => item.id, []);

  if (error) {
    showError("Error. Please, reload the app");
    return <Error />;
  }

  if (loading) {
    return <Loading />;
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
    paddingTop: 30,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  flatList: {
    width: "100%",
    flex: 1,
  },
});

export default Calculator;
