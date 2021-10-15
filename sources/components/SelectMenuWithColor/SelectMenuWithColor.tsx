import { Menu, Pressable, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface SelectMenuWithColorPropsType {
  list: Array<
    | { __typename?: "Color"; id: string; name: string; cssName: string }
    | null
    | undefined
  >;
  selectItem: (arg: string | undefined) => void;
}

const SelectMenuWithColor: React.FC<SelectMenuWithColorPropsType> = ({
  list,
  selectItem,
}) => {
  const [headerText, setHeaderText] = useState("All colors");

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
              <Text style={styles.headerText}>{headerText}</Text>
            </View>
          </Pressable>
        );
      }}
    >
      <Menu.Item onPress={() => handleChosenItem(undefined, "All colors")}>
        All colors
      </Menu.Item>
      {list &&
        list.map((item) => (
          <Menu.Item
            key={item?.id}
            style={styles.menuItem}
            onPress={() => handleChosenItem(item?.id!, item?.name!)}
          >
            <View
              style={[styles.colorBlock, { backgroundColor: item?.cssName }]}
            ></View>
            <Text>{item?.name!}</Text>
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
  colorBlock: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    height: "100%",
    width: 15,
    marginRight: 5,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default SelectMenuWithColor;
