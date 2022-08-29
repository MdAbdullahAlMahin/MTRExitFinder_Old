import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";

const HomePage = ({ route, navigation }) => {
  const { stepSize } = route.params;
  console.log(stepSize, typeof stepSize);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak(
              ""
            );
          }}
        >
          <Text style={styles.text}>朗讀頁面</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent3}>
        <Text style={styles.normaltext}></Text>
        <Text style={styles.normaltext}>
        您好! 按一下螢幕右下方的按鈕以開始導航，或者按一下螢幕左下方的按鈕以更新設定
        </Text>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Settings", { stepSize: stepSize });
            Speech.stop();
            Speech.speak(/*"Settings, bottom left to change step size, bottom right to hear instructions, top to go back to home page"*/);
          }}
        >
          <Text style={styles.text}>設定</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Select Station", { stepSize: stepSize });
            Speech.stop();
            Speech.speak("");
          }}
        >
          <Text style={styles.text}>開始導航</Text>
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
    top: 35,
    right: 15,
  },
  parent3: {
    position: "absolute",
    top: 90,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
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
    fontSize: 16,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 30,
    lineHeight: 40,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
});

export default HomePage;
