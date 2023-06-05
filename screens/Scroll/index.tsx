import React from "react";

import { View, Text } from "react-native";
import { TopBar } from "./components/TopBar";
import { SafeAreaView } from "react-native-safe-area-context";

export const Scroll: React.FC = () => {
  return (
    <SafeAreaView>
      <TopBar />
    </SafeAreaView>
  );
};
