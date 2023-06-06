import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { Posts, Scroll } from "../screens";
import PostsStack from "./PostsStack";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Scroll"
          component={Scroll}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="play-circle-outline"
                size={30}
                color={focused ? "#1AA7EC" : undefined}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Posts"
          component={PostsStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="document-text-outline"
                size={30}
                color={focused ? "#1AA7EC" : undefined}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
