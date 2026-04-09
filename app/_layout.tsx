import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack screenOptions={{
    headerStyle: {
      backgroundColor: "red",
    },
    headerTintColor: "#fff", 
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }} >
    <Stack.Screen name="(tabs)"  options={{headerShown: false}}></Stack.Screen>
  </Stack>)
}
