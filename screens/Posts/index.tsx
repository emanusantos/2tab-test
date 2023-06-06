import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { PostList, PostsHeader } from "./components";

export const Posts: React.FC = () => {
  return (
    <SafeAreaView>
      <PostsHeader />
      <PostList />
    </SafeAreaView>
  );
};
