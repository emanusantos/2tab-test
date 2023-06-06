import React from "react";

import { View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { PostList } from "./components";

export const Posts: React.FC = () => {
  return (
    <SafeAreaView>
      <PostList />
    </SafeAreaView>
  );
};
