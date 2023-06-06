import React from "react";

import { View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CustomStatusBar: React.FC<{ backgroundColor: string }> = ({
  backgroundColor,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar animated={true} backgroundColor={backgroundColor} />
    </View>
  );
};
