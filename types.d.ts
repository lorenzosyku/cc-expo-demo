export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home",
  "Profile"
>;
