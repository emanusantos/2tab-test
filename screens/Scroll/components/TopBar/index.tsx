import React from "react";

import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export const TopBar: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View style={styles.row}>
          <Ionicons
            name="person-circle-outline"
            size={40}
            style={styles.personIcon}
          />
          <View>
            <Text style={styles.smallText}>Hi!</Text>
            <Text>Maicon</Text>
          </View>
        </View>
        <View style={[styles.row, { gap: 15 }]}>
          <Ionicons name="search" size={25} />
          <Ionicons name="notifications" size={25} />
        </View>
      </View>
    </View>
  );
};
