import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Posts, ViewPost } from "../../screens";

const Stack = createNativeStackNavigator();

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
