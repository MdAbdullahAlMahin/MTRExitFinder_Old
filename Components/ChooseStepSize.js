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
  TouchableOpacity,
  KeyboardAvoidingView,
  InteractionManager,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const ChooseStepSize = ({ route, navigation }) => {
  const { gobackto } = route.params;
  const [stepSize, setStepSize] = useState(0.0);
  const { getItem, setItem } = useAsyncStorage("step_size");
  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setStepSize(newValue);
  };
  var error = false;
  const validate = () => {
    if (parseFloat(stepSize) > 0.0 && parseFloat(stepSize) < 1.0) {
      error = false;
    } else {
      error = true;
    }
  };

  const SaveAndNavigate = () => {
    validate();
    console.log(error);
    if (!error) {
      writeItemToStorage(stepSize);
      navigation.navigate("Home", { stepSize: stepSize });
      Speech.stop()
      Speech.speak("Submit");
    } else {
      alert("步伐距離無效, 請重新輸入.");
      Speech.speak(
              );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak(            );
          }}
        >
          <Text style={styles.text}>朗讀頁面</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent3}>
        <Text style={styles.normaltext}>
        請輸入你的步伐距離, 步伐距離應為零至一米之間
      </Text>
        {stepSize !== 0.0 ? (
          <Text style={styles.normaltext}>步伐距離: {stepSize}</Text>
        ) : null}
        {error ? (
          <Text style={styles.normaltext}>步伐距離無效, 請重新輸入</Text>
        ) : null}
        <TextInput
          placeholder=""
          ref={(ref) => {
            if (ref !== undefined && ref && !ref.isFocused()) {
              ref.focus();
            }
          }}
          onChangeText={(stepSize) => {
            setStepSize(stepSize);
          }}
          keyboardType="numeric"
          maxLength={5}
          style={styles.input}
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
            navigation.navigate(gobackto, {
              goto: gobackto === "Instructions" ? "Choose Step Size" : null,
            });
            Speech.stop()
            Speech.speak();
          }}
        >
          <Text style={styles.text}>返回上一頁</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={SaveAndNavigate}
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
    bottom: 20,
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
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    width: "48%",
    height: 50,
    padding: 18,
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
    fontSize: 25,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
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
});

export default ChooseStepSize;
