import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "../types";

const Profile = () => {
  const navigation = useNavigation<NavigationScreenProp>();
  const [dadjoke, setDadJoke] = useState<string>();

  useEffect(() => {
    const fetchJoke = async () => {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setDadJoke(data.value);
    };

    fetchJoke();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome to the Profile Screen",
      headerTitleAlign: "center",
    });
  }, []);

  return (
    <View style={styles.profile}>
      <Text>The dad joke of the day is:</Text>
      <Text>{dadjoke}</Text>
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
