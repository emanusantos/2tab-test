import React from "react";

import { ActivityIndicator, FlatList, View } from "react-native";

import { useFetchPosts } from "../../../../hooks/useFetchPosts";

import PostItem from "../PostItem";

import styles from "./styles";

export const PostList: React.FC = () => {
  const { posts, isLoading } = useFetchPosts();

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
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
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() =>
        isLoading ? <ActivityIndicator style={styles.activity} /> : null
      }
    />
  );
};
