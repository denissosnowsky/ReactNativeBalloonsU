import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import SliderFilter from "../../components/Slider/Slider";
import FilterWrapper from "../../components/FilterWrapper/FilterWrapper";
import Card from "../../components/Card/Card";
import {
  useAllBouquetsQuery,
  useBouquetsQuery,
  useMaxBouquetPriceQuery,
} from "../../store/generated/graphql";
import { NetworkStatus } from "@apollo/client";
import Error from "../Error/Error";
import { BouquetType } from "../../types/types";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Foooter/Foooter";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { RootBouquetsStackParamList } from "../../navigation/stackNav/StackBouquetsNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import MyText from "../../components/MyText/MyText";

type MainBouquetScreenNavigationProp =
  NativeStackNavigationProp<RootBouquetsStackParamList>;

const Bouquets: React.FC = () => {
  const TAKE = 20;
  const PRICE_STEP = 50;

  const { navigate } = useNavigation<MainBouquetScreenNavigationProp>();

  const [page, setPage] = useState(1);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [isEndReached, setIsEndReached] = useState<boolean>(false);

  const {
    loading: loadingCount,
    error: errorCount,
    data: dataCount,
    fetchMore: fetchMoreCount,
    networkStatus: networkStatusCount,
  } = useAllBouquetsQuery({
    variables: {
      price: price,
    },
  });

  const {
    loading: loadingMaxPrice,
    error: errorMaxPrice,
    data: dataMaxPrice,
  } = useMaxBouquetPriceQuery();

  const {
    loading: loadingBouquets,
    error: errorBouquets,
    data: dataBouquets,
    fetchMore: fetchMoreBouquets,
    networkStatus: networkStatusBouquets,
  } = useBouquetsQuery({
    variables: {
      skip: (page - 1) * TAKE,
      take: TAKE,
      price: price,
    },
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      const fethcedMessages = data?.bouquets;
      if (
        fethcedMessages &&
        dataCount?.allBouquets === data?.bouquets?.length
      ) {
        setIsEndReached(true);
      } else {
        setIsEndReached(false);
      }
    },
  });

  useEffect(() => {
    fetchMoreBouquets({
      variables: {
        skip: (page - 1) * TAKE,
        take: TAKE,
        price: price,
      },
    });
  }, [page, price]);

  const handlePrice = useCallback(
    (price: number) => {
      fetchMoreCount({
        variables: {
          price: price,
        },
      });
      setPrice(price);
      setPage(1);
    },
    [price]
  );

  const maxPrice =
    dataMaxPrice &&
    (dataMaxPrice?.maxBouquetPrice! % PRICE_STEP === 0
      ? dataMaxPrice.maxBouquetPrice
      : dataMaxPrice?.maxBouquetPrice! +
        (PRICE_STEP - (dataMaxPrice?.maxBouquetPrice! % PRICE_STEP)));

  const renderItem: ListRenderItem<BouquetType> = useCallback(({ item }) => {
    const onPress = () =>
      navigate("Bouquet", {
        info: item,
      });

    return (
      <Pressable style={[styles.pressable]} onPress={onPress}>
        <View style={styles.cardWrapper}>
          <Card
            name1={item.name ? item.name : ""}
            name2={item.subname ? item.subname : ""}
            image={item.image ? item.image : ""}
            price={item.price ? item.price : 0}
          />
        </View>
      </Pressable>
    );
  }, []);

  const keyExtractor = useCallback((item: BouquetType) => item.id, []);

  const onEndReached = useCallback(
    (info: { distanceFromEnd: number }) => {
      if (!isEndReached) {
        setPage((page) => page + 1);
      }
    },
    [isEndReached, page]
  );

  if (errorBouquets || errorCount) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FilterWrapper>
        {dataMaxPrice && (
          <SliderFilter
            price={price}
            step={PRICE_STEP}
            maxPrice={maxPrice!}
            changeSlider={handlePrice}
          />
        )}
      </FilterWrapper>

      {!dataBouquets?.bouquets ? (
        <Loading />
      ) : dataBouquets?.bouquets && dataBouquets?.bouquets.length === 0 ? (
        <View style={styles.emptyWrapper}>
          <MyText style={styles.emptyText}>There are no such balloons</MyText>
        </View>
      ) : (
        <FlatList
          style={styles.flatList}
          data={dataBouquets?.bouquets as Array<BouquetType>}
          horizontal={false}
          numColumns={2}
          ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0}
          ListFooterComponent={() => (
            <>
              <Footer />
              {(networkStatusBouquets === NetworkStatus.fetchMore ||
                networkStatusCount === NetworkStatus.fetchMore) && (
                <View style={styles.footer}>
                  <Image
                    source={require("../../../assets/loading2.gif")}
                    style={styles.loadingImg}
                  />
                </View>
              )}
            </>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  footer: {
    height: 50,
    display: "flex",
    alignItems: "center",
  },
  loadingImg: {
    height: "100%",
    resizeMode: "contain",
  },
  emptyWrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    color: "#e91e63",
  },
  cardWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  pressable: {
    width: "50%",
  },
});

export default memo(Bouquets);
