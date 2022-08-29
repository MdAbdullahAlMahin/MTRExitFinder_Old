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
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSpecs } from "../Helpers/UseSpecs";
import useMap from "../Helpers/UseMap";
import * as Speech from "expo-speech";

const SelectTypeOfExit = ({ route, navigation }) => {
  useEffect(() => {
    Speech.speak(
      exits_string +
        "Choices are at the top of the screen. Press your choice to proceed."
    );
  }, []);
  var exits_string = "The choices are, from left to right, ";
  const { stepSize, station, exit } = route.params;
  // console.log("In type", station);
  // var modes_of_exit = useSpecs(station);
  // console.log("In Type", modes_of_exit);
  // modes_of_exit = modes_of_exit.type_of_exits;
  // modes_of_exit = modes_of_exit[exit];
  // modes_of_exit.some((e) => e === "Escalator")
  //   ? (exits_string += "Escalator, ")
  //   : "";
  // modes_of_exit.some((e) => e === "Elevator")
  //   ? (exits_string += "Elevator, ")
  //   : "";
  // modes_of_exit.some((e) => e === "Exit")
  //   ? (exits_string += "Walk out exit, ")
  //   : "";
  // modes_of_exit.some((e) => e === "Stairs") ? (exits_string += "Stairs, ") : "";
  // const navigateEs = () => {
  //   // var map = useMap(station, stepSize);
  //   var dir = useMap(station, stepSize)[exit]["Escalator"];
  //   navigation.navigate("Directions", { dir, stepSize, station, exit });
  //   Speech.speak(
  //     "Escalator, Now step out of the elevator and start your journey "
  //   );
  // };
  // const navigateEl = () => {
  //   // var map = useMap(station, stepSize);
  //   var dir = useMap(station, stepSize)[exit]["Elevator"];
  //   navigation.navigate("Directions", { dir, stepSize, station, exit });
  //   Speech.speak(
  //     "Elevator, Now step out of the elevator and start your journey"
  //   );
  // };
  // const navigateSt = () => {
  //   // var map = useMap(station, stepSize);
  //   var dir = useMap(station, stepSize)[exit]["Stairs"];
  //   navigation.navigate("Directions", { dir, stepSize, station, exit });
  //   Speech.speak("Stairs, Now step out of the elevator and start your journey");
  // };
  const navigate = (mode) => {
    navigation.navigate("Directions", { mode, stepSize, station, exit });
    Speech.speak("Now step out of the elevator and start your journey");
  };
  const modes = {
    A: ["Elevator", "Escalator", "Stairs"],
    B1: ["Escalator", "Stairs"],
    B2: ["Escalator", "Stairs"],
    C: ["Escalator", "Stairs"],
  };
  const types = modes[exit];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent3}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button3}
          onPress={() => {
            Speech.speak();
          }}
        >
          <Text style={styles.text}>朗讀頁面</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent}>
        {/* {modes_of_exit.some((e) => e === "Escalator") ? (
          <TouchableOpacity style={styles.button} onPress={navigateEs}>
            <Text style={styles.text}>扶手電梯</Text>
          </TouchableOpacity>
        ) : null}
        {modes_of_exit.some((e) => e === "Elevator") ? (
          <TouchableOpacity style={styles.button} onPress={navigateEl}>
            <Text style={styles.text}>升降機</Text>
          </TouchableOpacity>
        ) : null}
        {modes_of_exit.some((e) => e === "Stairs") ? (
          <TouchableOpacity style={styles.button} onPress={navigateSt}>
            <Text style={styles.text}>樓梯</Text>
          </TouchableOpacity>
        ) : null}
        {modes_of_exit.some((e) => e === "Exit") ? (
          <TouchableOpacity style={styles.button2} onPress={navigateEx}>
            <Text style={styles.text}>Exit</Text>
          </TouchableOpacity>
        ) : null} */}
        {types.map((exit_mode, key) => {
          exits_string += exit_mode;
          return (
            <TouchableOpacity
              key={key}
              style={styles.button}
              onPress={() => {
                navigate(exit_mode);
              }}
            >
              <Text style={styles.text}>{exit_mode}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            navigation.navigate("Nearby Places", {
              stepSize,
              station,
              exit: exit,
            });
            Speech.speak();
          }}
        >
          <Text style={styles.text}>返回上一頁</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    height: "100%",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    top: 50,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
    alignItems: "center",
    paddingLeft: 20,
  },
  parent3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 35,
    right: 15,
  },
  parent4: {
    position: "absolute",
    top: 90,
  },
  button3: {
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
    height: 60,
    minWidth: "23%",
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    borderColor: "white",
    height: 50,
    width: "95%",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 18,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
});
export default SelectTypeOfExit;
