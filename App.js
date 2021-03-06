import React from "react";
import { StyleSheet, View } from "react-native";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";

export default function App() {
  return <OnBoardingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
