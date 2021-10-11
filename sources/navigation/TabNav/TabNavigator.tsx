import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import * as TabNavigationKeys from "./TabNavigationKeys";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../components/Card/Card";
import Calculator from "../../components/Calculator/Calculator";
import DrawerNavigator from "../drawerNav/DrawerNavigation";

export type RootTabParamList = {
  [TabNavigationKeys.Main]: undefined;
  [TabNavigationKeys.Calculator]: undefined;
  [TabNavigationKeys.Cart]: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { paddingTop: 5},
        tabBarLabelStyle: {fontSize: 12},
        headerTransparent : true
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
        component={Card}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName: "md-cart" | "md-cart-outline";
            iconName = focused ? "md-cart" : "md-cart-outline";

            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarBadge: false ? 1 : undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
