import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainRoot from "./Quiz3";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainRoot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
