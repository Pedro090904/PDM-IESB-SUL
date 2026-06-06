// src/app/_layout.jsx
import { Stack } from "expo-router";
import AuthProvider from "../contexts/AuthContext";
import GlobalState from "../contexts/GlobalState";

export default function RootLayout() {
  return (
    <AuthProvider>
      <GlobalState>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </GlobalState>
    </AuthProvider>
  );
}