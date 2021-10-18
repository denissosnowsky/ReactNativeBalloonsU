import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./sources/navigation/TabNav/TabNavigator";
import { useApolloClient } from "./sources/hooks/useApolloClient";
import { ApolloProvider } from "@apollo/client";
import Loading from "./sources/components/Loading/Loading";
import { NativeBaseProvider, useToast } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#f2f996";

  const client = useApolloClient();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!client || !fontsLoaded) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer theme={navTheme}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <TabNavigator />
          </KeyboardAvoidingView>
          <StatusBar style="auto" />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f996",
    justifyContent: "center",
    position: "relative",
  },
});
