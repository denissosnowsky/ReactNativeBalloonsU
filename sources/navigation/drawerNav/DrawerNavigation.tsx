import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as DrawerNavigationKeys from "./DrawerNavigationKeys";
import Price from "../../screens/Price/Price";
import Payment from "../../screens/Payment/Payment";
import Delivery from "../../screens/Delivery/Delivery";
import Contacts from "../../screens/Contacts/Contacts";
import Welcome from "../../screens/Welcome/Welcome";
import StackBouquetsNavigation from "../stackNav/StackBouquetsNavigation";
import StackBalloonsNavigator from "../stackNav/StackBalloonsNavigation";

export type RootDrawerParamList = {
  [DrawerNavigationKeys.Welcome]: undefined;
  [DrawerNavigationKeys.Bouquets]: undefined;
  [DrawerNavigationKeys.Balloons]: undefined;
  [DrawerNavigationKeys.Price]: undefined;
  [DrawerNavigationKeys.Payment]: undefined;
  [DrawerNavigationKeys.Delivery]: undefined;
  [DrawerNavigationKeys.Contacts]: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator: React.FC = () => {
  
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        drawerActiveTintColor: "#e91e63",
        drawerInactiveTintColor: "gray",
        drawerLabelStyle: { fontSize: 17, marginLeft: -20 },
        drawerContentContainerStyle: {
          marginTop: 20,
        },
        drawerStyle: {
          width: "80%",
        },
        drawerItemStyle: {
          marginBottom: 20,
        },
        headerTransparent: false,
        headerStyle: {
          backgroundColor: "#f2f996",
        },
        headerTitleStyle: {
          color: '#0d6efd',
          fontSize: 20
        }
      }}
    >
      <Drawer.Screen
        name={DrawerNavigationKeys.Welcome}
        component={Welcome}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Bouquets}
        component={StackBouquetsNavigation}
        options={({ route }) => ({
          drawerIcon: ({ focused, color }) => {
            let iconName: "airballoon" | "airballoon-outline";
            iconName = focused ? "airballoon" : "airballoon-outline";

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        })}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Balloons}
        component={StackBalloonsNavigator}
        options={{
          drawerIcon: ({ focused, color }) => {
            let iconName: "balloon" | "balloon";
            iconName = focused ? "balloon" : "balloon";

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Price}
        component={Price}
        options={{
          drawerIcon: ({ focused, color }) => {
            let iconName: "pricetag" | "pricetag-outline";
            iconName = focused ? "pricetag" : "pricetag-outline";

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Payment}
        component={Payment}
        options={{
          drawerIcon: ({ focused, color }) => {
            let iconName: "payments" | "payment";
            iconName = focused ? "payments" : "payment";

            return <MaterialIcons name={iconName} size={30} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Delivery}
        component={Delivery}
        options={{
          drawerIcon: ({ focused, color }) => {
            let iconName: "truck-delivery" | "truck-delivery-outline";
            iconName = focused ? "truck-delivery" : "truck-delivery-outline";

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Contacts}
        component={Contacts}
        options={{
          drawerIcon: ({ focused, color }) => {
            let iconName: "card-account-phone" | "card-account-phone-outline";
            iconName = focused
              ? "card-account-phone"
              : "card-account-phone-outline";

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
