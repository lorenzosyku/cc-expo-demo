import { StatusBar } from "expo-status-bar";
import {
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const handleClick = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    console.log('you clicked')
  };
  return (
    <View style={styles.container}>
      <Text>my First react native app!</Text>
      <Button title="Click me" onPress={handleClick} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
