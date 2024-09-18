import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";

const Textinputcustom = () => {
  return (
    <View style={styles.container}>
      {/* React Native logo */}
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={styles.logo}
      />

      {/* Header Text */}
      <Text style={styles.headerText}>EVERY REACT NATIVE APP</Text>

      {/* Speech Bubbles */}
      <View style={styles.speechBubbleContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>WE DID IT AGAIN...</Text>
        </View>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>WAIT! NOT THAT MUCH!</Text>
        </View>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>THIS IS NOT HOW IT STARTED!</Text>
        </View>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>SIGH... NEVER MIND</Text>
        </View>
      </View>

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>THE INPUT</Text>
        <TextInput style={styles.input} placeholder="Hello World!" />
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>THE INPUT</Text>
        <TextInput style={styles.input} placeholder="Hello World!" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRow: {
    flexDirection: "row", // Aligns text and input horizontally
    alignItems: "center", // Vertically aligns the text and input
    width: "80%",
    marginBottom: 10,
    justifyContent: "space-around",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  speechBubbleContainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  bubbleText: {
    color: "#333",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  inputLabel: {
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: "auto",
    width: "70%",
    paddingHorizontal: 10,
  },
});

export default Textinputcustom;
