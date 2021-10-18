import { Menu, Pressable, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MyText from "../MyText/MyText";

interface SelectMenuPropsType {
  list: Array<
    { __typename?: "Category"; id: string; name: string } | null | undefined
  >;
  selectItem: (arg: string | undefined) => void;
}

const SelectMenu: React.FC<SelectMenuPropsType> = ({ list, selectItem }) => {
  const [headerText, setHeaderText] = useState("All Categories");

  const handleChosenItem = (id: string | undefined, text: string) => {
    setHeaderText(text);
    selectItem(id);
  };

  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable
            accessibilityLabel="Menu"
            {...triggerProps}
            style={{ width: "40%" }}
          >
            <View style={styles.header}>
              <View>
                <MaterialIcons
                  name={false ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={22}
                  color="#000"
                />
              </View>
              <MyText style={styles.headerText}>{headerText}</MyText>
            </View>
          </Pressable>
        );
      }}
    >
      <Menu.Item
        onPress={() => handleChosenItem(undefined, "All Categories")}
      >
        All Categories
      </Menu.Item>
      {list &&
        list.map((item) => (
          <Menu.Item
            key={item?.id}
            onPress={() => handleChosenItem(item?.id!, item?.name!)}
          >
            {item?.name!}
          </Menu.Item>
        ))}
    </Menu>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "60%",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 20,
    overflow: "hidden",
  },
  headerText: {
    lineHeight: 30,
    fontSize: 15,
    textAlign: "center",
    marginRight: 5,
  },
});

export default SelectMenu;
