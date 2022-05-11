import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "../types";

const Profile = () => {
  const navigation = useNavigation<NavigationScreenProp>();
  const [dadjoke, setDadJoke] = useState<string>();

  const fetchJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setDadJoke(data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Jokes",
      headerTitleAlign: "center",
    });
  }, []);

  return (
    <View style={styles.profile}>
      <Text style={styles.content}>The dad joke of the day is:</Text>
      <View style={styles.card}>
        <Text style={styles.content}>{dadjoke}</Text>
        <Button title="Refresh" onPress={fetchJoke} />
      </View>
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
  card: {
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  content: {
    padding: 10,
    margin: 10,
  },
});
