import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SliderFilter from "../../components/Slider/Slider";
import FilterWrapper from "../../components/FilterWrapper/FilterWrapper";
import Card from "../../components/Card/Card";
import {
  useAllBalloonsQuery,
  useAllBouquetsQuery,
  useBalloonsQuery,
  useBouquetsQuery,
  useCategoriesQuery,
  useColorsQuery,
  useMaxBalloonPriceQuery,
  useMaxBouquetPriceQuery,
} from "../../store/generated/graphql";
import { showError } from "../../utils/showError";
import { NetworkStatus } from "@apollo/client";
import Error from "../Error/Error";
import { BalloonType } from "../../types/types";
import Loading from "../../components/Loading/Loading";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import SelectMenuWithColor from "../../components/SelectMenuWithColor/SelectMenuWithColor";
import Footer from "../../components/Foooter/Foooter";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootBalloonsStackParamList } from "../../navigation/stackNav/StackBalloonsNavigation";
import { useNavigation } from "@react-navigation/core";

type MainBalloonScreenNavigationProp =
  NativeStackNavigationProp<RootBalloonsStackParamList>;

const Bouquets: React.FC = () => {
  const TAKE = 20;
  const PRICE_STEP = 50;

  const { navigate } = useNavigation<MainBalloonScreenNavigationProp>();

  const [page, setPage] = useState(1);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string | undefined>(undefined);
  const [isEndReached, setIsEndReached] = useState<boolean>(false);

  const {
    loading: loadingCount,
    error: errorCount,
    data: dataCount,
    fetchMore: fetchMoreCount,
    networkStatus: networkStatusCount,
  } = useAllBalloonsQuery({
    variables: {
      price: price,
      categoryId: category,
      colorId: color,
    },
  });

  const {
    loading: loadingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useCategoriesQuery();

  const {
    loading: loadingColor,
    error: errorColor,
    data: dataColor,
  } = useColorsQuery();

  const {
    loading: loadingMaxPrice,
    error: errorMaxPrice,
    data: dataMaxPrice,
  } = useMaxBalloonPriceQuery();

  const {
    loading: loadingBalloons,
    error: errorBalloons,
    data: dataBalloons,
    fetchMore: fetchMoreBalloons,
    networkStatus: networkStatusBalloons,
  } = useBalloonsQuery({
    variables: {
      skip: (page - 1) * TAKE,
      take: TAKE,
      price: price,
      categoryId: category,
      colorId: color,
    },
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      const fethcedMessages = data?.balloons;
      if (
        fethcedMessages &&
        dataCount?.allBalloons === data?.balloons?.length
      ) {
        setIsEndReached(true);
      } else {
        setIsEndReached(false);
      }
    },
  });

  useEffect(() => {
    fetchMoreBalloons({
      variables: {
        skip: (page - 1) * TAKE,
        take: TAKE,
        price: price,
        categoryId: category,
        colorId: color,
      },
    });
  }, [page]);

  const handleFilter = useCallback(
    (type: "RANGE" | "CATEGORY" | "COLOR") =>
      (filter: number | string | undefined) => {
        fetchMoreCount({
          variables: {
            price: type === "RANGE" ? filter : price,
            categoryId: type === "CATEGORY" ? filter : category,
            colorId: type === "COLOR" ? filter : color,
          },
        });
        setPage(1);
        type === "RANGE" && setPrice(filter as number);
        type === "CATEGORY" && setCategory(filter as string);
        type === "COLOR" && setColor(filter as string);
      },
    []
  );

  const maxPrice =
    dataMaxPrice &&
    (dataMaxPrice?.maxBalloonPrice! % PRICE_STEP === 0
      ? dataMaxPrice.maxBalloonPrice
      : dataMaxPrice?.maxBalloonPrice! +
        (PRICE_STEP - (dataMaxPrice?.maxBalloonPrice! % PRICE_STEP)));

  const renderItem: ListRenderItem<BalloonType> = useCallback(({ item }) => {
    const onPress = () => navigate("Balloon", { info: item });

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

  const keyExtractor = useCallback((item: BalloonType) => item.id, []);

  const onEndReached = useCallback(
    (info: { distanceFromEnd: number }) => {
      if (!isEndReached) {
        setPage((page) => page + 1);
      }
    },
    [isEndReached, page]
  );

  if (errorBalloons || errorCount || errorCategory || errorColor) {
    showError("Error. Please, reload the app");
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
            changeSlider={handleFilter("RANGE")}
          />
        )}
        <View style={styles.catAndColWrapper}>
          {(dataColor || dataCategory) && (
            <>
              <SelectMenu
                list={dataCategory?.categories!}
                selectItem={handleFilter("CATEGORY")}
              />
              <SelectMenuWithColor
                list={dataColor?.colors!}
                selectItem={handleFilter("COLOR")}
              />
            </>
          )}
        </View>
      </FilterWrapper>
      {!dataBalloons?.balloons ? (
        <Loading />
      ) : dataBalloons?.balloons && dataBalloons?.balloons.length === 0 ? (
        <View style={styles.emptyWrapper}>
          <Text style={styles.emptyText}>There are no such balloons</Text>
        </View>
      ) : (
        <FlatList
          style={styles.flatList}
          data={dataBalloons?.balloons as Array<BalloonType>}
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
              {(networkStatusBalloons === NetworkStatus.fetchMore ||
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
  catAndColWrapper: {
    display: "flex",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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

export default Bouquets;
