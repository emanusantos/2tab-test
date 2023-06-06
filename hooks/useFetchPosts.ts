import React from "react";

import axios from "axios";

import mocks from "../mock.json";

export const useFetchPosts = () => {
  const [posts, setPosts] = React.useState<typeof mocks>();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await axios.get(
          "http://dev1.riza.network:8000/api/test1_userLogView/NO_SESSION"
        );

        setPosts(fetchedPosts.data);
      } catch (error) {
        console.log("Error while fetching posts", error);

        setPosts(mocks);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {
    posts: posts?.payload.Posts,
    isLoading,
  };
};
