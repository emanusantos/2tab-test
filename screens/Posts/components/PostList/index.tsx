import React from "react";

import { FlatList, View } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import { useFetchPosts } from "../../../../hooks/useFetchPosts";

import PostItem from "../PostItem";

export const PostList: React.FC = () => {
  const { posts } = useFetchPosts();

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: EStyleSheet.value("5rem") }}
      data={posts}
      keyExtractor={({ Post }) => Post.PostId}
      renderItem={({ item }) => (
        <PostItem
          fullName={`${item.Post.FirstName} ${item.Post.LastName}`}
          dateCreated={item.Post.DateCreated}
          title={item.Post.Name}
          description={item.Post.Desc}
          fileUrl={item.Files.FileTop?.FileURL}
        />
      )}
      ItemSeparatorComponent={() => (
        <View style={{ marginBottom: EStyleSheet.value("1rem") }} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
