import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { NavigationScreenProp } from "../types";

const Home = () => {
  const navigation = useNavigation<NavigationScreenProp>();
  const handleClick = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.line}>Check out the numerous Chuck Norris jokes on this app</Text>
      <Button title="See Jokes" onPress={handleClick} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    padding: 10,
    fontWeight: 800,
  },
});
