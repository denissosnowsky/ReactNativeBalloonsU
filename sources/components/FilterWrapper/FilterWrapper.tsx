import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { display } from "styled-system";
import { Divider } from "native-base";
import MyText from "../MyText/MyText";

const FilterWrapper: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <View>
      <View style={{ display: isOpen ? "flex" : "none" }}>{children}</View>
      <View style={styles.textWrapper} onTouchEnd={() => setIsOpen(!isOpen)}>
        <MyText style={styles.text}>{isOpen ? 'Hide Filters' : 'Show Filters'}</MyText>
        <View>
          <MaterialIcons
            name={isOpen ? "keyboard-arrow-up" : "filter-list"}
            size={22}
            color="#e91e63"
          />
        </View>
      </View>
    </View>
    {isOpen && <Divider orientation="horizontal" width="100%"/>}
    </>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 30,
    marginTop: 5
  },
  text: {
    fontSize: 15,
    lineHeight: 30,
    color: "#e91e63",
    marginRight: 5
  },
});

export default FilterWrapper;
