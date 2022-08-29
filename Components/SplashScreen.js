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
  FlatList,
  Image,
} from "react-native";
import * as Speech from "expo-speech";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Card } from "react-native-paper";

const SplashScreen = ({ navigation }) => {
  const debug = true;
  const [stepSize, setStepSize] = useState(0.576);
  // Load step size;
  const { getItem, setItem } = useAsyncStorage("step_size");
  const readItemFromStorage = async () => {
    const item = await getItem();
    setStepSize(item);
    if (!debug) {
      if (!isNaN(item) && item.toString().indexOf(".") != -1) {
        setTimeout(() => {
          navigation.navigate("Home", { stepSize: parseFloat(item) });
        }, 1000);
      } else {
        navigation.navigate("Instructions", { goto: "Choose Step Size" });
      }
    } else {
      setTimeout(() => {
        navigation.navigate("Instructions", { goto: "Choose Step Size" });
      }, 1000);
    }
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/mainicon.png")} />
      <Text style={styles.normaltext}>啓動中，請稍候...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  normaltext: {
    fontSize: 14,
    lineHeight: 21,
    // fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
  },
});

export default SplashScreen;
