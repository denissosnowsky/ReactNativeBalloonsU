import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import * as TabNavigationKeys from "./TabNavigationKeys";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Cart from "../../screens/Cart/Cart";
import Calculator from "../../screens/Calculator/Calculator";
import DrawerNavigator from "../drawerNav/DrawerNavigation";
import { useGetBasketValues } from "../../hooks/useGetBasketValues";

export type RootTabParamList = {
  [TabNavigationKeys.Main]: undefined;
  [TabNavigationKeys.Calculator]: undefined;
  [TabNavigationKeys.Cart]: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator: React.FC = () => {

  const basket = useGetBasketValues();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { paddingTop: 5},
        tabBarLabelStyle: {fontSize: 12},
        headerTransparent: false,
        headerStyle: {
          backgroundColor: "#f2f996",
        },
        headerTitleStyle: {
          color: '#0d6efd',
          fontSize: 20
        }
      }}
      initialRouteName={"Main"}
    >
      <Tab.Screen
        name={TabNavigationKeys.Main}
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName: "md-home" | "md-home-outline";
            iconName = focused ? "md-home" : "md-home-outline";

            return <Ionicons name={iconName} size={30} color={color} />;
          },
          headerShown: false
        }}
      />
      <Tab.Screen
        name={TabNavigationKeys.Calculator}
        component={Calculator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName: "md-calculator" | "md-calculator-outline";
            iconName = focused ? "md-calculator" : "md-calculator-outline";

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={TabNavigationKeys.Cart}
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName: "md-cart" | "md-cart-outline";
            iconName = focused ? "md-cart" : "md-cart-outline";

            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarBadge: basket.length > 0 ? basket.length : undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
