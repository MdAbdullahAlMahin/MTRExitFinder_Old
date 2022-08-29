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
import { stationExists, useSpecs } from "../Helpers/UseSpecs";
import * as Speech from "expo-speech";
const SelectExit = ({ route, navigation }) => {
  const { stepSize, station } = route.params;
  var exits = ["A", "B1", "B2", "C"];
  const [exit_number, set_exit_number] = useState(0);
  const update_exit = (dir) => {
    var num = (exit_number + dir) % exits.length;
    if (num === -1) {
      num = exits.length - 1;
    }
    set_exit_number(num);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak();
          }}
        >
          <Text style={styles.text}>朗讀頁面</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent3}>
        <Text style={styles.normaltext}>請問您想在哪一個出口出閘? </Text>
        <Text style={styles.normaltext}>出口 {exits[exit_number]}</Text>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            Speech.stop();
            navigation.navigate("Select Station", { stepSize: stepSize });
            Speech.speak();
          }}
        >
          <Text style={styles.text}>返回上一頁</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            update_exit(1);
            Speech.stop();
            Speech.speak(exits[(exit_number + 1) % exits.length]);
          }}
        >
          <Text style={styles.text}>變更出口選項</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Nearby Places", {
              stepSize,
              station,
              exit: exits[exit_number],
            });
            Speech.stop();
            Speech.speak();
          }}
        >
          <Text style={styles.text}>下一步</Text>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderColor: "white",
    height: 100,
    width: "33%",
    padding: 5,
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
    top: 300,
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
  text: {
    fontSize: 13.5,
    lineHeight: 20,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 30,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
});
export default SelectExit;
