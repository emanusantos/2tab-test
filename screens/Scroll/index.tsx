import React from "react";

import { ScrollView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import EStyleSheet from "react-native-extended-stylesheet";

import { StatusBar } from "expo-status-bar";

import { Scrollables, TopBar } from "./components";

import styles from "./styles";
import { CustomStatusBar } from "../../components";

export const Scroll: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
      <CustomStatusBar backgroundColor="#777" />
      <TopBar />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: EStyleSheet.value(100),
        }}
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.welcome, { fontSize: 20 }]}>Welcome</Text>
        <Scrollables />
      </ScrollView>
    </View>
  );
};
