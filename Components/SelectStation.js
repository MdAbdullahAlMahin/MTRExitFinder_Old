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
  KeyboardAvoidingView,
} from "react-native";
import * as Speech from "expo-speech";

import { stationExists } from "../Helpers/UseSpecs";

const SelectStation = ({ route, navigation }) => {
  const { stepSize } = route.params;
  const [station, setStation] = useState("");
  // var error = false;
  // const validate = () => {
  //   console.log(station);
  //   if (station !== "") {
  //     console.log(stationExists(station));
  //     error = !stationExists(station);
  //     if (!error) {
  //       navigation.navigate("Select Exit", { stepSize, station });
  //       Speech.stop();
  //       Speech.speak(
  //       );
  //     } else {
  //       alert("您輸入的港鐵站並不存在");
  //       Speech.speak(
  //       );
  //     }
  //   } else {
  //     error = true;
  //     alert("Station not found!");
  //     Speech.speak(
  //     );
  //   }
  // };
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
        <Text style={styles.normaltext}>請輸入您所在的港鐵站</Text>
        <TextInput
          placeholder="Enter station here"
          ref={(ref) => {
            if (ref !== undefined && ref && !ref.isFocused()) {
              ref.focus();
            }
          }}
          style={styles.input}
          onChangeText={(data) => {
            setStation(data.trim().replace(/\s/g, "").toLowerCase());
            console.log("Station: ", station);
          }}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.parent}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home", { stepSize });
            Speech.speak("Back");
          }}
        >
          <Text style={styles.text}>返回上一頁</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            // validate();
            navigation.navigate("Select Exit", { stepSize, station });
            Speech.stop();
            Speech.speak();
          }}
        >
          <Text style={styles.text}>下一步</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    bottom: 30,
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: "90%",
    alignItems: "center",
    minWidth: 200,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 30,
    lineHeight: 50,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
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
    height: 50,
    padding: 18,
  },
});
export default SelectStation;
