import React from "react";

import { Image, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { ViewPostProps } from "./types";

import styles from "./styles";

export const ViewPost: React.FC<ViewPostProps> = ({ navigation, route }) => {
  const url = route.params.url;

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Ionicons name="chevron-back-outline" size={30} />
      </TouchableOpacity>

      <Image source={{ uri: url }} style={styles.image} />
    </SafeAreaView>
  );
};
