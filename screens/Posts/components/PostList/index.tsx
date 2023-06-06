import React from "react";

import { useFetchPosts } from "../../../../hooks/useFetchPosts";

export const PostList = () => {
  const { posts } = useFetchPosts();

  console.log({ posts });

  return <></>;
};
