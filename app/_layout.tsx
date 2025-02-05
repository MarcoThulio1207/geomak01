import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00974a"/>
      <Stack
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: "white",
          headerShown: false
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00974a",
  },
  header: {
    flex:1,
    backgroundColor: "#00974a",
  },
});
