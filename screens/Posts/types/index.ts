import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PostsStackParams } from "../../../routes/PostsStack";

export type PostListScreenNavigator = NativeStackNavigationProp<
  PostsStackParams,
  "PostList"
>;
