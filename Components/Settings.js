import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";

const Settings = ({ route, navigation }) => {
  const { stepSize } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            navigation.navigate("Home", { stepSize });
            Speech.stop()
            Speech.speak();
          }}
        >
          <Text style={styles.text}>返回主頁</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Choose Step Size", { gobackto: "Settings" });
            Speech.stop()
            Speech.speak();
          }}
        >
          <Text style={styles.text}>變更步伐距離</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            Speech.stop()
            navigation.navigate("Instructions", { goto: "Settings" });
            Speech.speak();
          }}
        >
          <Text style={styles.text}>使用説明</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 15,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 50,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    borderColor: "white",
    height: 50,
    width: "95%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    height: 50,
    width: "48%",
    padding: 18,
  },
  text: {
    fontSize: 13.5,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  footer: {},
});
export default Settings;
