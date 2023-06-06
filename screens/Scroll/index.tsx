import React from "react";

import { ScrollView, Text, View } from "react-native";

import { Scrollables, TopBar } from "./components";

import { CustomStatusBar } from "../../components";

import styles from "./styles";

export const Scroll: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <CustomStatusBar backgroundColor="#777" />
      <TopBar />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.welcome, { fontSize: 20 }]}>Welcome</Text>
        <Scrollables />
      </ScrollView>
    </View>
  );
};
