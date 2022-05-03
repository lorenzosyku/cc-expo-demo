import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "../types";

const Profile = () => {
  const navigation = useNavigation<NavigationScreenProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome to the Profile Screen",
      headerTitleAlign: "center",
    });
  }, []);

  return (
    <View style={styles.profile}>
      <Text>this is the profile screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
