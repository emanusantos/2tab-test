import React from "react";

import { Text, View } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import { Ionicons } from "@expo/vector-icons";

export const PostsHeader: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: EStyleSheet.value("1rem"),
        marginVertical: EStyleSheet.value("1rem"),
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Feed</Text>
      <View style={{ flexDirection: "row", gap: EStyleSheet.value("1rem") }}>
        <Ionicons
          name="heart-outline"
          size={25}
          style={{ marginRight: EStyleSheet.value(5) }}
        />

        <Ionicons
          name="chatbubble-ellipses-outline"
          size={25}
          style={{ marginRight: EStyleSheet.value(5) }}
        />
      </View>
    </View>
  );
};
