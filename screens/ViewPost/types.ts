import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { PostsStackParams } from "../../routes/PostsStack";

export type ViewPostProps = NativeStackScreenProps<
  PostsStackParams,
  "ViewPost"
>;
