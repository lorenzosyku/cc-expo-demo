import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Profile from "./screens/Profile";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
}

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home",
  "Profile"
>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
