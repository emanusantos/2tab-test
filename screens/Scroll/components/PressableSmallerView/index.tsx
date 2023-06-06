import React from "react";

import { TouchableOpacity, View } from "react-native";

import { VideoModal } from "../VideoModal";

import styles from "./styles";

export const PressableSmallerView: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleOpen = () => setIsVisible(true);

  const handleClose = () => setIsVisible(false);

  return (
    <>
      <View style={styles.scrollableChild}>
        <TouchableOpacity onPress={handleOpen} style={styles.leftChild} />

        <View style={styles.smallerViewsContainer}>
          {Array.from(Array(3).keys()).map((_, index) => (
            <TouchableOpacity
              onPress={handleOpen}
              key={`smaller-view-${index}`}
              style={styles.smallerView}
            />
          ))}
        </View>
      </View>

      <VideoModal isVisible={isVisible} onRequestClose={handleClose} />
    </>
  );
};
