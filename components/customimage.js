import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Customimage = () => {
  return (
    <View style={styles.container}>
      <Text>customimage</Text>
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.image}
      ></Image>
    </View>
  );
};

export default Customimage;
const styles = StyleSheet.create({
  image: {
    width: 166,
    height: 150,
  },
  container: {
    flex: 1,
  },
});
