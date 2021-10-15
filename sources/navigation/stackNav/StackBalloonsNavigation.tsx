import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { memo } from "react";
import Product from "../../components/Product/Product";
import Balloons from "../../screens/Balloons/Balloons";
import { BalloonType } from "../../types/types";
import * as StackBalloonsNavigationKeys from "./StackBalloonsNavigationKeys";

export type RootBalloonsStackParamList = {
  [StackBalloonsNavigationKeys.Main]: undefined;
  [StackBalloonsNavigationKeys.Balloon]: {info: BalloonType};
};

const Stack = createNativeStackNavigator<RootBalloonsStackParamList>();

const StackBalloonsNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "#e91e63",
          fontSize: 20,
          fontWeight: '400'
        },
        headerTransparent: false,
        headerStyle: {
          backgroundColor: "#f2f996",
        },
      }}
    >
      <>
        <Stack.Screen
          name={StackBalloonsNavigationKeys.Main}
          component={Balloons}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={StackBalloonsNavigationKeys.Balloon}
          component={Product}
          options={({ route }) => ({ title: `${route.params.info.name} ${route.params.info.subname}` })}
        />
      </>
    </Stack.Navigator>
  );
};

export default memo(StackBalloonsNavigator);
