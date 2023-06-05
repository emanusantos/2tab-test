import React from "react";

import { Pressable, ScrollView, View } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import styles from "./styles";
import { PressableSmallerView } from "../PressableSmallerView";

export const Scrollables: React.FC = () => {
  return (
    <>
      {Array.from(Array(5).keys()).map((_, index) => (
        <ScrollView
          key={`horizontal-scrollview-${index}`}
          contentContainerStyle={{
            width: "auto",
            height: EStyleSheet.value(160),
            marginBottom: EStyleSheet.value(25),
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {Array.from(Array(3).keys()).map((_, index) => (
            <PressableSmallerView
              key={`horizontal-scrollview-child-${index}`}
            />
          ))}
        </ScrollView>
      ))}
    </>
  );
};
