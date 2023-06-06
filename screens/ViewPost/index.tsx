import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { SafeAreaView } from "react-native-safe-area-context";

export const ViewPost: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={{ padding: EStyleSheet.value("1rem") }}>
        <Ionicons name="chevron-back-outline" size={30} />
      </View>
    </SafeAreaView>
  );
};
