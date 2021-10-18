import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { memo } from "react";
import Product from "../../components/Product/Product";
import Bouquets from "../../screens/Bouquets/Bouquets";
import { BouquetType } from "../../types/types";
import * as StackBouquetsNavigationKeys from "./StackBouquetsNavigationKeys";

export type RootBouquetsStackParamList = {
  [StackBouquetsNavigationKeys.Main]: undefined;
  [StackBouquetsNavigationKeys.Bouquet]: {
    info: BouquetType;
  };
};

const Stack = createNativeStackNavigator<RootBouquetsStackParamList>();

const StackBouquetsNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "#e91e63",
          fontSize: 20,
        },
        headerTransparent: false,
        headerStyle: {
          backgroundColor: "#f2f996",
        },
      }}
    >
      <>
        <Stack.Screen
          name={StackBouquetsNavigationKeys.Main}
          component={Bouquets}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={StackBouquetsNavigationKeys.Bouquet}
          component={Product}
          options={({ route }) => ({
            title: `${route.params.info.name} ${route.params.info.subname}`,
          })}
        />
      </>
    </Stack.Navigator>
  );
};

export default memo(StackBouquetsNavigator);
