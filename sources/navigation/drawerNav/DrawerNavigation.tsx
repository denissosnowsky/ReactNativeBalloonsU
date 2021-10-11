import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as DrawerNavigationKeys from "./DrawerNavigationKeys";
import Bouquets from "../../components/Bouquets/Bouquets";
import Balloons from "../../components/Balloons/Ballons";
import Price from "../../components/Price/Price";
import Payment from "../../components/Payment/Payment";
import Delivery from "../../components/Delivery/Delivery";
import Contacts from "../../components/Contacts/Contacts";
import Welcome from "../../components/Welcome/Welcome";

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
            marginBottom: 20
        },
        headerTransparent : true,
      }}
    >
      <Drawer.Screen
        name={DrawerNavigationKeys.Welcome}
        component={Welcome}
        options={{
          drawerItemStyle: { display: "none" },
          headerStyle: {backgroundColor: 'transparent'}
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Bouquets}
        component={Bouquets}
        options={{
          drawerIcon: ({ focused, color }) => {
            let iconName: "airballoon" | "airballoon-outline";
            iconName = focused ? "airballoon" : "airballoon-outline";

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationKeys.Balloons}
        component={Balloons}
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
