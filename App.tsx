import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./sources/navigation/TabNav/TabNavigator";
import { useApolloClient } from "./sources/hooks/useApolloClient";
import { ApolloProvider } from "@apollo/client";
import Loading from "./sources/components/Loading/Loading";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const navTheme = DefaultTheme;
  navTheme.colors.background = "#f2f996";

  const client = useApolloClient();

  if (!client) {
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
