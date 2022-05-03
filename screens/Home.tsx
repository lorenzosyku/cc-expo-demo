import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

const Home = () => {
  const handleClick = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    console.log("you clicked");
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
