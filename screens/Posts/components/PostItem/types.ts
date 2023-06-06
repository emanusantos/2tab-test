import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PostsStackParams } from "../../../../routes/PostsStack";

export type PostListScreenNavigator = NativeStackNavigationProp<
  PostsStackParams,
  "PostList"
>;

export interface PostItemProps {
  fullName: string;
  dateCreated: string;
  title: string;
  description: string;
  fileUrl?: string;
}
