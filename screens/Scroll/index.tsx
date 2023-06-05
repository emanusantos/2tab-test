import React from "react";

import { ScrollView, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import EStyleSheet from "react-native-extended-stylesheet";

import { Scrollables, TopBar } from "./components";

import styles from "./styles";

export const Scroll: React.FC = () => {
  return (
    <SafeAreaView>
      <TopBar />

      <ScrollView
        contentContainerStyle={{ paddingBottom: EStyleSheet.value(100) }}
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.welcome, { fontSize: 20 }]}>Welcome</Text>
        <Scrollables />
      </ScrollView>
    </SafeAreaView>
  );
};
