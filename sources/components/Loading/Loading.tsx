import React from "react";
import { View, Image } from "react-native";

const Loading: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2f996"
      }}
    >
      <Image source={require("../../../assets/loading.gif")} />
    </View>
  );
};

export default Loading;
