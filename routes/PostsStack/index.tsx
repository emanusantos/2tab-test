import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Posts, ViewPost } from "../../screens";

export type PostsStackParams = {
  PostList: undefined;
  ViewPost: { url: string };
};

const Stack = createNativeStackNavigator<PostsStackParams>();

export default function PostsStack() {
  return (
    <Stack.Navigator
      initialRouteName="PostList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PostList" component={Posts} />
      <Stack.Screen name="ViewPost" component={ViewPost} />
    </Stack.Navigator>
  );
}
