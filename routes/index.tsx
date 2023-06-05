import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Posts, Scroll } from '../screens';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Scroll" component={Scroll} />
        <Tab.Screen name="Posts" component={Posts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}