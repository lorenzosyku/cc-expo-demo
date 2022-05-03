import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { homeScreenProp } from "../App";

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  const handleClick = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <Text>my First react native app!</Text>
      <Button title="Click me" onPress={handleClick} />
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
});
