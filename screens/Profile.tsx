import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
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
