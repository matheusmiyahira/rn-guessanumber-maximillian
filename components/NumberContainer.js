import React from "react";
import { View, Text, StyleSheet, TextComponent } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
    fontWeight: "bold"
  }
});

export default NumberContainer;
