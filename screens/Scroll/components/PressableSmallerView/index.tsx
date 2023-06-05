import React from "react";

import { Pressable, View } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import styles from "../Scrollables/styles";

export const PressableSmallerView: React.FC = () => {
  return (
    <Pressable style={styles.scrollableChild}>
      <View
        style={{
          backgroundColor: "#777",
          height: "100%",
          width: "45%",
          borderRadius: 15,
        }}
      />

      <View style={{ width: "100%", marginTop: EStyleSheet.value(10) }}>
        {Array.from(Array(3).keys()).map((_, index) => (
          <View
            key={`smaller-view-${index}`}
            style={{
              backgroundColor: "#777",
              height: EStyleSheet.value(10),
              width: "40%",
              borderRadius: 15,
              marginLeft: EStyleSheet.value(15),
              marginBottom: EStyleSheet.value(10),
            }}
          />
        ))}
      </View>
    </Pressable>
  );
};
