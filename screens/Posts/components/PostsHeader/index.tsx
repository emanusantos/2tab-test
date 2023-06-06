import React from "react";

import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export const PostsHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <View style={styles.iconsContainer}>
        <Ionicons name="heart-outline" size={25} style={styles.icon} />

        <Ionicons
          name="chatbubble-ellipses-outline"
          size={25}
          style={styles.icon}
        />
      </View>
    </View>
  );
};
