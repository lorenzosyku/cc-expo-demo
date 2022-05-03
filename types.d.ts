export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type NavigationScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home",
  "Profile"
>;
