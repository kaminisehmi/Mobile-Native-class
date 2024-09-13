import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Customimage from "../components/customimage";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Image</Text>
      <Customimage />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
