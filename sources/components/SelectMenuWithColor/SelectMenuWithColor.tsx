import { Menu, Pressable, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MyText from "../MyText/MyText";

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
  const defaultHeaderText = "All colors";

  const [headerText, setHeaderText] = useState(defaultHeaderText);

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
            style={{ width: "70%" }}
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
              {headerText !== defaultHeaderText ? (
                <View
                  style={[
                    styles.colorBlock,
                    {
                      backgroundColor: list.find(
                        (item) => item?.name === headerText
                      )?.cssName,
                    },
                  ]}
                ></View>
              ) : null}
            </View>
          </Pressable>
        );
      }}
    >
      <Menu.Item onPress={() => handleChosenItem(undefined, defaultHeaderText)}>
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
            <MyText>{item?.name!}</MyText>
          </Menu.Item>
        ))}
    </Menu>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 30,
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
    height: 30,
    marginRight: 5,
    marginLeft: 5,
  },
  colorBlock: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    height: "100%",
    width: 15,
    marginRight: 5,
    aspectRatio: 1 / 1,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default SelectMenuWithColor;
