import React from "react";

import { ScrollView } from "react-native";

import { PressableSmallerView } from "../PressableSmallerView";

import styles from "./styles";

export const Scrollables: React.FC = () => {
  return (
    <>
      {Array.from(Array(5).keys()).map((_, index) => (
        <ScrollView
          key={`horizontal-scrollview-${index}`}
          contentContainerStyle={styles.scrollView}
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
